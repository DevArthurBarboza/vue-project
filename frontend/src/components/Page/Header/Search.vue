<template>
    <div id="search">
        <input id="search_input" type="text" name="search" @change="autocomplete(this.value)" :value="value">
        <div id="autocomplete_results"></div>
    </div>
</template>

<script>
export default { 

    name : 'Search',
    setup() {
        return {
            placeholder : 'Buscar na Loja',
            min_caracter_qty_for_autocomplete : 3,
            value : ''
        }
    },
    methods : {
        autocomplete() {
            if(this.value.length < min_caracter_qty_for_autocomplete){
                return;
            }

            fetch().then();
            // make ajax call
            
        }
    }
}
</script>