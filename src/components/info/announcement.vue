<script setup lang="ts">
import DateElement from "../smallParts/dateElement.vue";
import AnnouncementInformationElement from "../smallParts/announcementInformationElement.vue";
import { fetchHelper } from "../../utils/fetchHelper";
import {computed, onMounted, ref} from "vue";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
}

interface ProductApiResponse {
  products: Product[];
}

const data = ref<ProductApiResponse | null>(null);
const isLoading = ref(false);
const hasError = ref(false);
const isRotating = ref(false);
const selectedSort = ref("title");

async function fetchData() {
  isRotating.value = true;
  isLoading.value = true;
  hasError.value = false;

  const { data: responseData, error } = await fetchHelper<ProductApiResponse>(
      'https://dummyjson.com/products/category/smartphones'
  );

  if (error) {
    console.error(error);
    hasError.value = true;
  } else {
    data.value = responseData;
  }

  isLoading.value = false;
}

onMounted(() => {
  fetchData();
});

const sortedProducts = computed(() => {
  if (!data.value) return [];

  let products = [...data.value.products];

  switch (selectedSort.value) {
    case "title":
      products.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "rating":
      products.sort((a, b) => b.rating - a.rating);
      break;
    case "price":
      products.sort((a, b) => b.price - a.price);
      break;
  }

  return products;
});

</script>

<template>
  <div class="announcementBoxTop">
    <div class="announcementBoxTopHead">
      <div class="announcementBoxTopHeadSchedule">Anouncement</div>
      <div class="announcementBoxButtons">
        <img @click="fetchData"
             :class="{ rotating: isRotating }"
             @animationend="isRotating = false"
             src="/src/assets/images/ic_refresh.svg"
             style="width: 20px; height: 20px;"
             alt="ic_burgermenu.svg"
        />
        <select class="announcementSelect" v-model="selectedSort">
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
    </div>
    <div>
      <div v-if="isLoading" style="color: black">Loading...</div>
      <div v-else-if="hasError">The data could not be reached.</div>
      <div v-else class="announcementBoxElements">
        <div v-for="product in sortedProducts" :key="product.id" >
          <announcement-information-element :title="product.title"
                                            :description="product.description"
                                            :price="product.price"
                                            :rating="product.rating">
          </announcement-information-element>
        </div>
      </div>
    </div>
  </div>
  <div class="announcementBoxBottom">
    <button>
      See All Announcement
    </button>
  </div>
</template>

<style>
.announcementBoxTop {
  border: 1px solid #E0E0E0;
  border-radius: 12px 12px 0 0;
  padding: 16px 20px 0;
  height: 280px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.announcementBoxTop::-webkit-scrollbar {
  display: none;
}

.announcementBoxTopHead {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.announcementBoxTopHeadSchedule {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #161E54;
  display: flex;
  align-items: center;
  margin-left: 2px;
}

.announcementBoxButtons{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.announcementSelect{
  color: var(--secondary-subtitle-color);
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  height: 30px;
  padding: 0 6px;
}

.announcementBoxBottom {
  border-right: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  border-left: 1px solid #E0E0E0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
}

.announcementBoxBottom button {
  color: var(--main-color);
  border: none;
  padding: 8.5px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: none;
}

@media (max-width: 1399px) {
  .announcementBoxTop {
    height: 233px;
  }
  .announcementBoxTopHeadSchedule{
    font-size: 16px;
    line-height: 24px;
  }
@media (max-width: 750px) {
  .announcementBoxTop{
    height: 283px;
  }
}

}

.rotating {
  animation: rotate 0.5s linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>