<script>
    import {onMount} from "svelte";

    function scrollToResults() {
        const resultsElement = document.getElementById('results-component');
        const elementPosition = resultsElement.getBoundingClientRect().top + window.pageYOffset;
        const gap = 20; // Adjust this value to change the gap size (in pixels)
        const scrollToPosition = elementPosition - gap;

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    }

    onMount(() => {
        const searchInput = document.getElementById('search-input');
        const searchIcon = document.querySelector('.search-icon');

        searchInput.addEventListener('focus', () => {
            searchIcon.classList.add('icon-active');
        });

        searchInput.addEventListener('blur', () => {
            searchIcon.classList.remove('icon-active');
        });

    })
</script>


<div id="search-container" style=" overflow: hidden;text-shadow: 1px 1px 0 rgba(0, 0, 0);
  position: relative;">
    <div class="header-content" style="display: flex;flex-direction: column;letter-spacing: .05rem">
        <img
                class="demo-bg"
                style="opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  height: auto;-webkit-mask: linear-gradient(#000, #0000);
          mask: linear-gradient(#000, #0000);"
                src="./search-bg-image.jpeg"
                alt=""
        >
        <h1 style="z-index: 1;text-shadow: 0 1px 6px #000000;
position: relative;"><span style="color: #b0ffc7;">State of Florida Certified</span> <br
                class="large-screen-break"/><span
                style="color:  rgb(211 255 224)">Environmental Health Professionals</span></h1>
        <div class="header-text">
            The Department of Health maintains a list of all active Certified <br class="large-screen-break"/>
            Environmental Health Professionals. <a
                style="color: yellow;text-decoration: none;cursor: pointer"
                href="https://www.floridahealth.gov/licensing-and-regulation/certified-environmental-health-professional/index.html">Last
            Updated April 5, 2023</a>
        </div>
        <div class="header-text">
            For licensing info, certification resources and prep from the <br class="large-screen-break"/> Department of
            Environmental Protection <a
                style="color: yellow;text-decoration: none;cursor: pointer"
                href="https://floridadep.gov/water/onsite-sewage/content/accelerated-certification-training-act">click
            here</a>
        </div>
        <div class="header-text" style="font-size: 14px">
            <i class="fas fa-envelope" style="color: #f5f5f5;"/> <span
                style="color: white;font-weight: 200;margin-left: 5px">Contact: </span>
            <span style="color: #00ffd9;cursor: text">
            FloridaCEHP@gmail.com
        </span>
        </div>
    </div>
    <div class="search-elements" style="z-index: 1;
position: relative;">
        <div class="search-element">
            <div class="search-desc">
                Search by Name:
            </div>
            <div class="input-wrapper">
                <input type="text" id="search-input" placeholder="Enter Name...">
                <i class="fas fa-search search-icon"></i>
            </div>
        </div>

        <div class="search-element">
            <div class="search-desc">
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
            <div class="search-desc">
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
            <div class="search-desc">
                Filter by Agency:
            </div>
            <select id="track-select">
                <option value="">...</option>
                <option value="DOH">Department of Health (DOH)</option>
                <option value="DEP">Department of Environmental Protection (DEP)</option>

                <option value="PRIVATE">Private</option>
            </select>
        </div>

        <div class="search-element search-button" style="margin-top: 20px;">
            <button on:click={() => {scrollToResults()}}>
                Results
            </button>
        </div>

    </div>
</div>


<style>
    .search-desc {
        font-size: .85rem;
        margin-bottom: 8px;
        font-weight: 500;
        color: #ececec;
    }

    .header-text {
        font-weight: 400;
        line-height: 1.65rem;
        z-index: 1;
        position: relative;
        color: white;
        margin-top: 1rem;

    }

    select {
        text-indent: 10px;

    }
</style>