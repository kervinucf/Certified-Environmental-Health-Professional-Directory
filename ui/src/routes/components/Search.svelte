<div id="search-container" style=" overflow: hidden;
  position: relative;">
    <div class="header-content" style="display: flex;flex-direction: column;">
        <img
                class="demo-bg"
                style="opacity: 0.16;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;"
                src="https://images.pexels.com/photos/196663/pexels-photo-196663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
        >
        <h1 style="z-index: 1;
position: relative;">State of Florida <br/>Certified Environmental Health Professionals</h1>
        <div style="font-weight: 400;line-height: 1.5rem;z-index: 1;
position: relative;
    max-width: 80%;
    color: #d2d2d2;
    margin-top: 1rem;">
            The Department of Health maintains a list of all active Certified Environmental Health Professionals: <a
                style="color: yellow;text-decoration: none;cursor: pointer"
                href="https://www.floridahealth.gov/licensing-and-regulation/certified-environmental-health-professional/index.html">Click
            here to learn more</a>
        </div>
    </div>
    <div class="search-elements" style="z-index: 1;
position: relative;">
        <div class="search-element">
            <div style="font-size: .85rem;margin-bottom: 8px;font-weight: 500;color: #d2d2d2;">
                Search by Name:
            </div>
            <div class="input-wrapper">
                <input type="text" id="search-input" placeholder="Enter Name...">
                <i class="fas fa-search search-icon"></i>
            </div>
        </div>

        <div class="search-element">
            <div style="font-size: .85rem;margin-bottom: 8px;font-weight: 500;color: #d2d2d2">
                Filter by Program:
            </div>
            <select id="program-select">
                <option value="">...</option>
                <option value="FOOD PROTECTION">Food Protection</option>
                <option value="OSTDS">OSTDS</option>
                <option value="FOOD PROTECTION & OSTDS">Food Protection & OSTDS</option>
            </select>
        </div>
        <div class="search-element">
            <div style="font-size: .85rem;margin-bottom: 8px;font-weight: 500;color: #d2d2d2">
                Filter by County:
            </div>
            <select id="county-select">
                <option value="">...</option>
                <option value="ALACHUA">Alachua</option>
                <option value="BAKER">Baker</option>
                <option value="BAY">Bay</option>
                <option value="BRADFORD">Bradford</option>
                <option value="BREVARD">Brevard</option>
                <option value="BROWARD">Broward</option>
                <option value="CALHOUN">Calhoun</option>
                <option value="CHARLOTTE">Charlotte</option>
                <option value="CITRUS">Citrus</option>
                <option value="CLAY">Clay</option>
                <option value="COLLIER">Collier</option>
                <option value="COLUMBIA">Columbia</option>
                <option value="DESOTO">DeSoto</option>
                <option value="DIXIE">Dixie</option>
                <option value="DUVAL">Duval</option>
                <option value="ESCAMBIA">Escambia</option>
                <option value="FLAGLER">Flagler</option>

                <option value="FRANKLIN">Franklin</option>
                <option value="GADSDEN">Gadsden</option>
                <option value="GILCHRIST">Gilchrist</option>
                <option value="GLADES">Glades</option>
                <option value="GULF">Gulf</option>
                <option value="HAMILTON">Hamilton</option>
                <option value="HARDEE">Hardee</option>
                <option value="HENDRY">Hendry</option>
                <option value="HERNANDO">Hernando</option>
                <option value="HIGHLANDS">Highlands</option>
                <option value="HILLSBOROUGH">Hillsborough</option>
                <option value="HOLMES">Holmes</option>
                <option value="INDIAN RIVER">Indian River</option>
                <option value="JACKSON">Jackson</option>
                <option value="JEFFERSON">Jefferson</option>
                <option value="LAFAYETTE">Lafayette</option>
                <option value="LAKE">Lake</option>
                <option value="LEE">Lee</option>
                <option value="LEON">Leon</option>
                <option value="LEVY">Levy</option>
                <option value="LIBERTY">Liberty</option>
                <option value="MADISON">Madison</option>
                <option value="MANATEE">Manatee</option>
                <option value="MARION">Marion</option>
                <option value="MARTIN">Martin</option>
                <option value="MIAMI-DADE">Miami-Dade</option>
                <option value="MONROE">Monroe</option>
                <option value="NASSAU">Nassau</option>
                <option value="OKALOOSA">Okaloosa</option>
                <option value="OKEECHOBEE">Okeechobee</option>
                <option value="ORANGE">Orange</option>
                <option value="OSCEOLA">Osceola</option>
                <option value="PALM BEACH">Palm Beach</option>
                <option value="PASCO">Pasco</option>
                <option value="PINELLAS">Pinellas</option>
                <option value="POLK">Polk</option>
                <option value="PUTNAM">Putnam</option>
                <option value="ST. JOHNS">St. Johns</option>
                <option value="ST. LUCIE">St. Lucie</option>
                <option value="SANTA ROSA">Santa Rosa</option>
                <option value="SARASOTA">Sarasota</option>
                <option value="SEMINOLE">Seminole</option>
                <option value="SUMTER">Sumter</option>
                <option value="SUWANNEE">Suwannee</option>
                <option value="TAYLOR">Taylor</option>
                <option value="UNION">Union</option>
                <option value="VOLUSIA">Volusia</option>
                <option value="WAKULLA">Wakulla</option>
                <option value="WALTON">Walton</option>
                <option value="WASHINGTON">Washington</option>

            </select>
        </div>
        <div class="search-element">
            <div style="font-size: .85rem;margin-bottom: 8px;font-weight: 500;color: #d2d2d2">
                Filter by Agency:
            </div>
            <select id="track-select">
                <option value="">...</option>
                <option value="DOH">Department of Health (DOH)</option>
                <option value="DEP">Department of Environmental Protection (DEP)</option>

                <option value="PRIVATE">Private</option>
            </select>
        </div>

    </div>
</div>