<template>
  <div class="w-100 MtMargin bg-info">
    <div class="header pt-4">
      <h3 class="w-100 text-center text-success">Stock PTT</h3>
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
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
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

      onMounted(() => {
        GetRecord();
        staticBackdrop.value = new Modal(document.getElementById('staticBackdrop'), {
          keyboard: false
        })
        window.onscroll = throttle(GetRecord, 1000)

      })
      function throttle(fn, delay) {
        var flag = true;
        return function (e) {
          if (flag) {
            setTimeout(() => {
              if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
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
        proxy.$http.get(api, { params: { page: page.value } }).then((response) => {
          text.value = text.value.concat(response.data.data)
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
        data
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