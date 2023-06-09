const city_dict = {
    'BT': ['Bartow', 'Central', 'Polk'],
    'VZ': ['Venice', 'Southwest', 'Sarasota'],
    'PT': ['Palatka', 'Northeast', 'Putnam'],
    'TC': ['Trilby', 'Central', 'Pasco'],
    'FM': ['Fort Myers', 'Southwest', 'Lee'],
    'JY': ['Jay', 'Northwest', 'Santa Rosa'],
    'IS': ['Indian Shores', 'Central', 'Pinellas'],
    'MW': ['Mary Esther', 'Northwest', 'Okaloosa'],
    'UB': ['Unknown', 'Unknown', 'Unknown'],
    'GR': ['Greenacres', 'Southeast', 'Palm Beach'],
    'QL': ['Unknown', 'Unknown', 'Unknown'],
    'AC': ['Alachua', 'Northeast', 'Alachua'],
    'LQ': ['Unknown', 'Unknown', 'Unknown'],
    'DO': ['Dover', 'Central', 'Hillsborough'],
    'NB': ['Newberry', 'Northeast', 'Alachua'],
    'WS': ['Winter Springs', 'Central', 'Seminole'],
    'NP': ['North Port', 'Southwest', 'Sarasota'],
    'EX': ['Unknown', 'Unknown', 'Unknown'],
    'CH': ['Chattahoochee', 'Northwest', 'Gadsden'],
    'TR': ['Trenton', 'North', 'Gilchrist'],
    'UL': ['Unknown', 'Unknown', 'Unknown'],
    'ZF': ['Unknown', 'Unknown', 'Unknown'],
    'YB': ['Unknown', 'Unknown', 'Unknown'],
    'PK': ['Unknown', 'Unknown', 'Unknown'],
    'CP': ['Chiefland', 'North', 'Levy'],
    'OG': ['Okeechobee', 'South', 'Okeechobee'],
    'EO': ['Unknown', 'Unknown', 'Unknown'],
    'LA': ['Lake Alfred', 'Central', 'Polk'],
    'UT': ['Unknown', 'Unknown', 'Unknown'],
    'NM': ['New Smyrna Beach', 'Northeast', 'Volusia'],
    'LT': ['Lakeland', 'Central', 'Polk'],
    'AD': ['Unknown', 'Unknown', 'Unknown'],
    'RB': ['Reddick', 'North', 'Marion'],
    'PI': ['Pinecrest', 'Southeast', 'Miami-Dade'],
    'LO': ['Longwood', 'Central', 'Seminole'],
    'FG': ['Fort Gaines', 'Southwest', 'Clay'],
    'SR': ['Santa Rosa Beach', 'Northwest', 'Walton'],
    'EU': ['Eustis', 'Central', 'Lake'],
    'CV': ['Crawfordville', 'Northwest', 'Wakulla'],
    'HB': ['Holmes Beach', 'Central', 'Manatee'],
    'PV': ['Ponte Vedra Beach', 'Northeast', 'St. Johns'],
    'LS': ['Lake Suzy', 'Southwest', 'DeSoto'],
    'CN': ['Cantonment', 'Northwest', 'Escambia'],
    'DS': ['DeFuniak Springs', 'Northwest', 'Walton'],
    'OE': ['Unknown', 'Unknown', 'Unknown'],
    'SS': ['Silver Springs', 'Central', 'Marion'],
    'CL': ['Clearwater', 'Central', 'Pinellas'],
    'DI': ['Dunnellon', 'Central', 'Marion'],
    'NJ': ['Unknown', 'Unknown', 'Unknown'],
    'CK': ['Cedar Key', 'Northwest', 'Levy'],
    'YV': ['Unknown', 'Unknown', 'Unknown'],
    'ES': ['Estero', 'Southwest', 'Lee'],
    'CG': ['Cape Coral', 'Southwest', 'Lee'],
    'TN': ['Tampa', 'Central', 'Hillsborough'],
    'HI': ['Hialeah', 'Southeast', 'Miami-Dade'],
    'IV': ['Unknown', 'Unknown', 'Unknown'],
    'CY': ['Crystal River', 'Central', 'Citrus'],
    'BE': ['Belleview', 'Central', 'Marion'],
    'EL': ['Elfers', 'Central', 'Pasco'],
    'SB': ['South Bay', 'Southeast', 'Palm Beach'],
    'LD': ['Lauderdale Lakes', 'Southeast', 'Broward'],
    'DN': ['Dunnellon', 'Central', 'Marion'],
    'WU': ['Unknown', 'Unknown', 'Unknown'],
    'JX': ['Jacksonville', 'Northeast', 'Duval'],
    'JM': ['Unknown', 'Unknown', 'Unknown'],
    'PL': ['Plantation', 'Southeast', 'Broward'],
    'FL': ['Fort Lauderdale', 'Southeast', 'Broward'],
    'OC': ['Ocala', 'Central', 'Marion'],
    'FP': ['Fernandina Beach', 'Northeast', 'Nassau'],
    'LK': ['Lake City', 'North', 'Columbia'],
    'PR': ['Palm River', 'Central', 'Hillsborough'],
    'NS': ['New Smyrna Beach', 'Northeast', 'Volusia'],
    'LC': ['Lake Como', 'Northeast', 'Putnam'],
    'WG': ['Winter Garden', 'Central', 'Orange'],
    'BU': ['Bushnell', 'Central', 'Sumter'],
    'TV': ['Tierra Verde', 'Central', 'Pinellas'],
    'BS': ['Bonita Springs', 'Southwest', 'Lee'],
    'UE': ['Unknown', 'Unknown', 'Unknown'],
    'BF': ['Unknown', 'Unknown', 'Unknown'],
    'TT': ['Tallahassee', 'Northwest', 'Leon'],
    'NH': ['New Haven', 'Unknown', 'Unknown'],
    'TP': ['Tampa', 'Central', 'Hillsborough'],
    'PF': ['Palm Beach', 'Southeast', 'Palm Beach'],
    'VB': ['Vero Beach', 'Southeast', 'Indian River'],
    'JP': ['Jupiter', 'Southeast', 'Palm Beach'],
    'SF': ['Sanford', 'Central', 'Seminole'],
    'PC': ['Panama City', 'Northwest', 'Bay'],
    'HP': ['Hollywood', 'Southeast', 'Broward'],
    'ST': ['Stuart', 'Southeast', 'Martin'],
    'LG': ['Longboat Key', 'Southwest', 'Sarasota'],
    'FQ': ['Unknown', 'Unknown', 'Unknown'],
    'MD': ['MiamiDade', 'Southeast', 'Miami-Dade'],
    'BV': ['Belleview', 'Central', 'Marion'],
    'MB': ['Miramar Beach', 'Northwest', 'Walton'],
    'KL': ['Key Largo', 'Southeast', 'Monroe'],
    'VN': ['Venice', 'Southwest', 'Sarasota'],
    'HN': ['Hudson', 'Central', 'Pasco'],
    'QD': ['Unknown', 'Unknown', 'Unknown'],
    'KW': ['Key West', 'South', 'Monroe'],
    'LW': ['Lakewood Ranch', 'Southwest', 'Manatee'],
    'FW': ['Fort Walton Beach', 'Northwest', 'Okaloosa'],
    'DL': ['DeLand', 'Northeast', 'Volusia'],
    'LB': ['Lake Buena Vista', 'Central', 'Orange'],
    'IM': ['Unknown', 'Unknown', 'Unknown'],
    'TH': ['Thonotosassa', 'Central', 'Hillsborough'],
    'BK': ['Brooksville', 'Central', 'Hernando'],
    'FZ': ['Unknown', 'Unknown', 'Unknown'],
    'GV': ['Gainesville', 'North', 'Alachua'],
    'KB': ['Key Biscayne', 'Southeast', 'Miami-Dade'],
    'RQ': ['Unknown', 'Unknown', 'Unknown'],
    'JA': ['Jacksonville', 'Northeast', 'Duval'],
    'PG': ['Punta Gorda', 'Southwest', 'Charlotte'],
    'AK': ['Apalachicola', 'Northwest', 'Franklin'],
    'CR': ['Coral Springs', 'Southeast', 'Broward'],
    'FB': ['Fernandina Beach', 'Northeast', 'Nassau'],
    'VI': ['Viera', 'Central', 'Brevard'],
    'KS': ['Kissimmee', 'Central', 'Osceola'],
    'OR': ['Orlando', 'Central', 'Orange'],
    'AX': ['Unknown', 'Unknown', 'Unknown'],
    'PJ': ['Port St. Joe', 'Northwest', 'Gulf'],
    'MY': ['Mayo', 'North', 'Lafayette'],
    'NI': ['Niceville', 'Northwest', 'Okaloosa'],
    'KH': ['Keystone Heights', 'North', 'Clay'],
    'MH': ['Marathon', 'South', 'Monroe'],
    'JB': ['Jensen Beach', 'Southeast', 'Martin'],
    'HR': ['Hobe Sound', 'Southeast', 'Martin'],
    'TS': ['Tavares', 'Central', 'Lake'],
    'SU': ['Sunrise', 'Southeast', 'Broward'],
    'PB': ['Palm Bay', 'Central', 'Brevard'],
    'CO': ['Cocoa', 'Central', 'Brevard'],
    'HA': ['Hallandale', 'Southeast', 'Broward'],
    'CS': ['Coral Springs', 'Southeast', 'Broward'],
    'BN': ['Bunnell', 'Northeast', 'Flagler'],
    'WE': ['Weston', 'Southeast', 'Broward'],
    'XX': ['Unknown', 'Unknown', 'Unknown'],
    'CF': ['Unknown', 'Unknown', 'Unknown'],
    'WA': ['West Palm Beach', 'Southeast', 'Palm Beach'],
    'GS': ['Gulf Shores', 'Unknown', 'Unknown'],
    'SN': ['Sarasota', 'Southwest', 'Sarasota'],
    'BD': ['Bradenton', 'Southwest', 'Manatee'],
    'BI': ['Big Pine Key', 'South', 'Monroe'],
    'OP': ['Orange Park', 'Northeast', 'Clay'],
    'BL': ['Belle Glade', 'Southeast', 'Palm Beach'],
    'QY': ['Unknown', 'Unknown', 'Unknown'],
    'DA': ['Davie', 'Southeast', 'Broward'],
    'BQ': ['Unknown', 'Unknown', 'Unknown'],
    'WB': ['West Bradenton', 'Southwest', 'Manatee'],
    'QC': ['Unknown', 'Unknown', 'Unknown'],
    'MI': ['Miami', 'Southeast', 'Miami-Dade'],
    'BA': ['Boca Raton', 'Southeast', 'Palm Beach'],
    'NA': ['Naples', 'Southwest', 'Collier'],
    'SY': ['Safety Harbor', 'Central', 'Pinellas'],
    'WW': ['Unknown', 'Unknown', 'Unknown'],
    'OS': ['Ormond Beach', 'Northeast', 'Volusia'],
    'GB': ['Green Cove Springs', 'Northeast', 'Clay'],
    'MS': ['Miami Shores', 'Southeast', 'Miami-Dade'],
    'CI': ['Cocoa Beach', 'Central', 'Brevard'],
    'RK': ['Rockledge', 'Central', 'Brevard'],
    'OK': ['Okeechobee', 'South', 'Okeechobee'],
    'FC': ['Fernandina Beach', 'Northeast', 'Nassau'],
    'DC': ['Dade City', 'Central', 'Pasco'],
    'KY': ['Key Colony Beach', 'South', 'Monroe'],
    'DG': ['Deerfield Beach', 'Southeast', 'Broward'],
    'UC': ['Unknown', 'Unknown', 'Unknown'],
    'TA': ['Tarpon Springs', 'Central', 'Pinellas'],
    'AR': ['Arcadia', 'Southwest', 'DeSoto'],
    'CZ': ['Unknown', 'Unknown', 'Unknown'],
    'PN': ['Pensacola', 'Northwest', 'Escambia'],
    'HZ': ['Unknown', 'Unknown', 'Unknown'],
    'BG': ['Boynton Beach', 'Southeast', 'Palm Beach'],
    'BM': ['Boca Raton', 'Southeast', 'Palm Beach'],
    'AL': ['Altamonte Springs', 'Central', 'Seminole'],
    'GO': ['Gulfport', 'Central', 'Pinellas'],
    'HE': ['Hernando', 'Central', 'Citrus'],
    'LL': ['Lutz', 'Central', 'Hillsborough'],
    'YU': ['Unknown', 'Unknown', 'Unknown'],
    'FI': ['Fort Pierce', 'Southeast', 'St. Lucie'],
    'AG': ['Atlantic Beach', 'Northeast', 'Duval'],
    'WH': ['Winter Haven', 'Central', 'Polk'],
    'MO': ['Mount Dora', 'Central', 'Lake'],
    'GK': ['Unknown', 'Unknown', 'Unknown'],
    'EN': ['Englewood', 'Southwest', 'Charlotte'],
    'PY': ['Perry', 'Northwest', 'Taylor'],
    'DB': ['Daytona Beach', 'Northeast', 'Volusia'],
    'MR': ['Merritt Island', 'Central', 'Brevard'],
    'FD': ['Fort Myers', 'Southwest', 'Lee'],
    'SK': ['Sebring', 'South', 'Highlands'],
    'HL': ['Holly Hill', 'Northeast', 'Volusia'],
    'TL': ['Tamarac', 'Southeast', 'Broward'],
    'CW': ['Clewiston', 'South', 'Hendry'],
    'WQ': ['Unknown', 'Unknown', 'Unknown'],
    'OB': ['Oldsmar', 'Central', 'Pinellas'],
    'HC': ['Haines City', 'Central', 'Polk'],
    'NO': ['North Port', 'Southwest', 'Sarasota'],
    'QB': ['Unknown', 'Unknown', 'Unknown'],
    'DR': ['Doral', 'Southeast', 'Miami-Dade'],
    'RX': ['Unknown', 'Unknown', 'Unknown'],
    'ML': ['Melbourne', 'Central', 'Brevard'],
    'MC': ['Marco Island', 'Southwest', 'Collier']
}

export const get_county = (abv) => {
    try {
       if (city_dict[abv][2] != "Unknown") {
           return city_dict[abv][2]
       }
       else {
              return ""
       }
    } catch {
        return ""

    }
}

export const get_city = (abv) => {
    return city_dict[abv][0]
}

export const get_region = (abv) => {
    return city_dict[abv][1]
}

export const loader = "        Searching <span class=\"loader\">\n" +
    "        <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    "             x=\"0px\" y=\"0px\"\n" +
    "             width=\"24px\" height=\"30px\" viewBox=\"0 0 24 30\" style=\"enable-background:new 0 0 50 50;\"\n" +
    "             xml:space=\"preserve\">\n" +
    "    <rect x=\"0\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\" opacity=\"0.2\">\n" +
    "      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\"/>\n" +
    "    </rect>\n" +
    "    <rect x=\"8\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\" opacity=\"0.2\">\n" +
    "      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.15s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.15s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.15s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "    </rect>\n" +
    "    <rect x=\"16\" y=\"10\" width=\"4\" height=\"10\" fill=\"#333\" opacity=\"0.2\">\n" +
    "      <animate attributeName=\"opacity\" attributeType=\"XML\" values=\"0.2; 1; .2\" begin=\"0.3s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"height\" attributeType=\"XML\" values=\"10; 20; 10\" begin=\"0.3s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "      <animate attributeName=\"y\" attributeType=\"XML\" values=\"10; 5; 10\" begin=\"0.3s\" dur=\"0.6s\"\n" +
    "               repeatCount=\"indefinite\"/>\n" +
    "    </rect>\n" +
    "  </svg>\n" +
    "    </span>"