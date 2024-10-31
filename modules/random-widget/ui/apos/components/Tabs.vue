<template>
  <div class="apos-input-wrapper">
    <div class="tabs--wrap">
      <div class="tabs" v-if="tabs && Array.isArray(tabs) && tabs.length > 1">
        <div
          v-for="(tab, index) in tabs"
          :key="'tab-' + index"
          :ref="
            (el) => {
              tabRefs[index] = el;
            }
          "
          :class="[
            { tab__selected: index === selected },
            { last: index === tabs.length - 1 },
          ]"
          @click="selectTab(index)"
          class="tab-head--item"
        >
          {{ tab.label }}
        </div>

        <div class="select-highlight" ref="selectHighlight"></div>
      </div>

      <div
        v-for="(tab, index) in tabs"
        :key="'slot-' + tab.label + index"
        :class="[{ visible: index === selected }, 'slot']"
      >
        <slot />
      </div>
    </div>

    <div v-if="!Array.isArray(tabs) || tabs.length < 1 || !tabs" class="">
      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "Tabs",
  props: ['tabs'],

  data() {
    return {
      selected: 0,
    };
  },

  setup(props, { emit }) {
    const selected = ref(0);
    const selectHighlight = ref(null);
    const tabRefs = ref([]);

    const selectTab = (i) => {
      if (Array.isArray(props.tabs) && props.tabs.length < 2) return;

      selected.value = i;
      emit("get-tab-index", i);

      const getCurrentTab = tabRefs.value[i];

      if (selectHighlight.value && getCurrentTab) {
        selectHighlight.value.style.left = getCurrentTab.offsetLeft + "px";
        selectHighlight.value.style.width =
          getCurrentTab.getBoundingClientRect().width + "px";
      }
    };

    onMounted(() => {
      if (Array.isArray(props.tabs) && props.tabs.length < 2) return;

      selectTab(0);
      const getCurrentTab = tabRefs.value[0];

      console.log('getCurrentTab ', getCurrentTab)

      if (selectHighlight.value && getCurrentTab) {
        selectHighlight.value.style.width =
          getCurrentTab.getBoundingClientRect().width + "px";
      }
    });

    return {
      props,
      selected,
      selectHighlight,
      tabRefs,
      selectTab,
    };
  },
};
</script>

<style scoped lang="scss">
.tabs {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.tab-head--item {
  padding: 8px 0;
  font-family: var(--a-family-default);
  font-size: 12px;
  color: #666;

  &:not(.last) {
    margin-right: 32px;
  }
  &.tab__selected {
    transition: color 0.2s ease-in-out;
    color: black;
  }

  &:hover {
    cursor: pointer;
  }
}
.select-highlight {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 30px;
  background-color: var(--a-primary);
  transition: all 0.2s ease-in-out;
}
.slot {
  display: none;
  &.visible {
    display: block;
    animation: fadeUp 0.3s both ease-in-out;
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(4px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
