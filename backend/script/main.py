import pandas as pd
import os


def excel_date_to_js_date(serial):
    return str(serial).replace(" 00:00:00", "")


def get_county(city):
    # Add your function to get the county from the city here
    return "County"


# get relative path
def get_relative_path():
    return os.path.dirname(os.path.realpath(__file__))


def main():
    print("Reading data from active cehp list xlsx...")
    # Read data from .xlsx
    xlsx_data = pd.read_excel(f'{get_relative_path()}/active_cehp_list/data.xlsx', engine='openpyxl', header=None)[2:]
    xlsx_data.columns = ["Last Name", "First Name", "Program Area", "Certification Number", "Expiration Date"]

    print("Reading data from fl government payroll csv...")
    # Read data from .csv
    csv_data = pd.read_csv(f'{get_relative_path()}/fl_gov_payroll/data.csv', header=None)
    csv_data.columns = ["Area Code", "Phone", "First Name", "Last Name", "Agency", "Email", "City"]

    # Combine the names into a single column
    print("Combining names...")
    xlsx_data['Full Name'] = xlsx_data['First Name'].str.upper() + ' ' + xlsx_data['Last Name'].str.upper()
    csv_data['Full Name'] = csv_data['First Name'].str.upper() + ' ' + csv_data['Last Name'].str.upper()

    # Merge the .xlsx and .csv data
    print("Merging data...")
    merged_data = xlsx_data.merge(csv_data, on='Full Name', how='left')

    # Apply necessary transformations
    print("Applying transformations...")
    merged_data['Expiration Date'] = merged_data['Expiration Date'].apply(excel_date_to_js_date)
    merged_data['Phone'] = merged_data['Area Code'].fillna('').astype(str) + '-' + merged_data['Phone'].fillna(
        '').astype(str)

    merged_data = merged_data.drop(columns=['Full Name', 'Area Code', 'First Name_y', 'Last Name_y'])

    # Write merged data to a new .xlsx file
    print("Writing merged data to a new .xlsx file...")
    merged_data.to_excel(f'{get_relative_path()}/merged/cehp_merged.xlsx', index=False, engine='openpyxl')

    print("Done!")


if __name__ == '__main__':
    main()
