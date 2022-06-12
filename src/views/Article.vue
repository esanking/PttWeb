<template>
  <div></div>
</template>
<script>
  import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
  // import { inject } from 'vue'
  export default {
    setup() {
      const { proxy } = getCurrentInstance();
      let articleHref = ref('')
      onMounted(() => {
        GetRecord();
      })
      async function GetRecord() {
        // const api = 'https://obscure-cove-49403.herokuapp.com/CheckIn/GetCheckInRecord';
        // const api = 'http://localhost:3000/ptt/articleHref';
        // await proxy.$http.get(api,{params:{articleHref: articleHref.value.replace(/,/g,'/')}}).then((response) => {
        //   console.log('response',response.data)
        // });
      }
      return {
      }
    }
  };
</script>