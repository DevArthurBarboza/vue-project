<template>
    <div>
        <ul>
            <li>Telefone : {{this.phone}}</li>
            <li>Whatsapp : {{this.whatsapp}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Contact",

    data() {
        return {
            phone : '4333333333',
            whatsapp : '43999999999' 
        }
    }
}
</script>