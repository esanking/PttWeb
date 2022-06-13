<template>
  <div class=" bg-indigo w-100" style="height:100vh;">
    <div class="w-100 bg-indigo">
      <div class="header pt-4">
        <h3 class="w-100 text-center text-purple">Stock PTT</h3>
        <div v-for="item in text" :key="item" class="d-flex justify-content-center">
          <div class="bg-white w-75 d-flex justify-content-between mt-2" @click="article(item)">
            <div>
              <p>作者: {{item.author}}</p>
              <p>標題: {{item.title}}</p>
              <p>時間: {{item.releaseTime}}</p>
            </div>
            <div v-if="item.imgList.length > 0">
              <img :src="item.imgList[0]" :alt="item.title">
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center" v-if="loading">
        <div class="spinner-border text-purple" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
      <div class="d-flex justify-content-center" v-else>
        <h5 class=" text-danger">
          載入失敗
          <span class="spinner-grow me-1" style="width: .5rem; height: .5rem;" role="status" />
          <span class="spinner-grow me-1" style="width: .5rem; height: .5rem;" role="status" />
          <span class="spinner-grow" style="width: .5rem; height: .5rem;" role="status" />
        </h5>
      </div>
    </div>
  </div>
  <!-- <Card v-show="active" :data="data" @active="active=!active" /> -->
  <Card id="staticBackdrop" :data="data" />
</template>

<script>
  import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
  import { useRouter } from "vue-router";
  import Card from '../components/Card.vue';
  import { defineComponent } from "vue";
  import { Modal } from 'bootstrap'
  // import { inject } from 'vue'
  export default defineComponent({
    components: { Card },
    setup() {
      const { proxy } = getCurrentInstance();
      const router = useRouter();
      let text = ref([]);
      // let active = ref(false);
      let data = ref({});
      let staticBackdrop = ref(null);
      let page = ref(1);
      let loading = ref(true);

      onMounted(() => {
        GetRecord();
        staticBackdrop.value = new Modal(document.getElementById('staticBackdrop'), {
          keyboard: false
        })
        window.onscroll = throttle(GetRecord, 3000)

      })
      function throttle(fn, delay) {
        var flag = true;
        return function (e) {
          if (flag) {
            setTimeout(() => {
              if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
                loading.value = true;
                page.value++;
                fn.apply(this, arguments);
              }
              flag = true;
            }, delay);
          }
          flag = false;
        };
      }
      async function GetRecord() {
        const api = 'https://protected-chamber-55237.herokuapp.com/ptt/getList';
        // const api = 'http://localhost:3000/ptt/getList';
        proxy.$http.get(api, { params: { page: page.value } })
          .then((response) => {
            text.value = text.value.concat(response.data.data)
          })
          .catch((req) => {
            loading.value = false;
          });
      }
      function article(item) {
        data.value = item;
        // active.value = true;
        staticBackdrop.value.show();
      }
      return {
        text,
        article,
        // active,
        data,
        loading
      }
    }
  });
</script>
<style lang="scss" scoped>
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  img {
    width: 220px;
    height: 120px;
  }

  @media (max-width:400px) {
    img {
      display: none;
    }
  }
</style>