<script>
    import {onMount} from "svelte";
    import {loadData, updateResultsCount, filterTable} from "./ts/helpers.js";
    import Search from "./components/Search.svelte";
    import ResultCounter from "./components/ResultCounter.svelte";
    import TableResults from "./components/TableResults.svelte";

    onMount(async () => {

        const searchInput = document.getElementById("search-input");
        const programSelect = document.getElementById("program-select");
        const countySelect = document.getElementById("county-select");
        const trackSelect = document.getElementById("track-select");

        searchInput.addEventListener("input", filterTable);
        programSelect.addEventListener("change", filterTable);
        countySelect.addEventListener("change", filterTable);
        trackSelect.addEventListener("change", filterTable);

        loadData().then(updateResultsCount);
    });
</script>


<main>
    <section>
        <Search/>
    </section>

    <section>
        <ResultCounter/>
    </section>

    <section>
        <TableResults/>
    </section>
</main>