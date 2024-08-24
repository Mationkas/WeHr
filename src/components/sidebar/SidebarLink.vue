<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {collapsed} from "./state.ts";

export default {
  props: {
    to: {type: String, required: true},
    icon: {type: String, required: true}
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return {isActive, collapsed}
  }
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <img class="icon" :src="icon"/>
    <Transition>
      <span v-if="!collapsed">
        <slot></slot>
      </span>
    </Transition>
  </router-link>
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to{
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  padding: 16px 30px;
}

.icon {
  width: 24px;
  height: 24px;

  flex-shrink: 0;
}

.link:hover {
  color: var(--main-color);
}

.link.active {
  color: var(--main-color);
}

@media (max-width: 991px) {
  .link{
    padding: 0 33px;
  }
}

</style>