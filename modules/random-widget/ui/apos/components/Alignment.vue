<template>
  <div class="alignment">
    <div class="items" v-if="visible">
      <div
        class="items--wrap"
        v-if="(only && only === 'horizontal') || only === null"
      >
        <div
          class="item"
          v-for="(item, index) in horizontal"
          :class="[
            value?.horizontal === item.value || value === item.value ? 'selected' : '',
            index === horizontal.length - 1 ? 'last' : '',
          ]"
          :key="'h' + item.label + index"
          :data-value="item.value"
          @click="getValue('horizontal', item.value)"
        >
          <AlignmentIcons :icon="item.icon" />
        </div>
      </div>

      <span class="alignment--separator" v-if="only === null"></span>

      <div
        class="items--wrap"
        v-if="(only && only === 'vertical') || only === null"
      >
        <div
          class="item"
          :class="[
            value?.vertical === item.value || value === item.value ? 'selected' : '',
          ]"
          v-for="(item, index) in vertical"
          :key="'v' + item.label + index"
          :data-value="item.value"
          @click="getValue('vertical', item.value)"
        >
          <AlignmentIcons :icon="item.icon" />
        </div>
      </div>

      <span
        v-if="clearButton"
        @click="clear"
        class="alignment--clear"
      >
        Clear
      </span>
    </div>
  </div>
</template>


<script>
import { ref, reactive, toRefs, defineComponent } from "vue";
import AlignmentIcons from "./AlignmentIcons";

export default defineComponent({
  name: "Alignment",
  components: {
    AlignmentIcons,
  },
  props: {
    only: {
      type: String,
      default: null,
    },
    clearButton: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [Object, String],
      default: null,
    },
    shortenValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const align = ref({});
    const next = ref({});
    const horizontal = ref([
      {
        label: "Left",
        icon: "h-left",
        value: "left",
      },
      {
        label: "Center",
        icon: "h-center",
        value: "center",
      },
      {
        label: "Right",
        icon: "h-right",
        value: "right",
      },
    ]);

    const vertical = ref([
      {
        label: "Top",
        icon: "v-top",
        value: "top",
      },
      {
        label: "Center",
        icon: "v-center",
        value: "center",
      },
      {
        label: "Bottom",
        icon: "v-bottom",
        value: "bottom",
      },
    ]);

    const getValue = (type, value) => {
      if (props.shortenValue && props.only) {
        align.value = value;
        next.value = value;
        emit("get-values", align.value);
      } else {
        align.value[type] = value;
        next.value = { ...align.value, [type]: value };
        emit("get-values", { ...align.value, [type]: value });
      }
    };

    const clear = () => {
      align.value = {};
      emit("get-values", {});
      next.value = {};
    };

    return {
      ...toRefs(props),
      align,
      horizontal,
      vertical,
      getValue,
      clear,
    };
  },
});
</script>

<style scoped lang="scss">
.alignment {
  margin-bottom: 32px;

  &--clear {
    margin: 0 0 0 16px;
    color: var(--a-primary);
    font-family: var(--a-family-default);
    font-size: var(--a-type-base);
    font-weight: var(--a-weight-base);
    letter-spacing: var(--a-letter-base);

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &--separator {
    display: block;
    width: 1px;
    height: 20px;
    margin: auto 32px;
    background: #ccc;
  }
}
.items {
  display: flex;
  align-items: center;

  &--wrap {
    display: flex;
    align-items: center;
  }
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--a-base-9);
  border: 1px solid #fff;
  border-radius: 4px;

  &:not(.last) {
    margin-right: 8px;
  }

  &.selected {
    color: var(--a-primary);
    border-color: var(--a-primary);
  }

  &:hover:not(.selected) {
    background-color: var(--a-base-10);
    cursor: pointer;
  }
}
</style>
