<template>
  <AposInputWrapper :modifiers="modifiers" :field="field" :error="effectiveError" :uid="uid"
    :display-options="displayOptions">
    <template #body>
      <div class="apos-input-wrapper">
        <div
          class="select-wrap"
          v-bind:class="[
            size === 'small' ? 'small' : 'default',
          ]"
        >
          <div class="head">
            <div class="label">{{ title }}</div>

            <span @click="clear" class="clear"> Clear </span>
          </div>

          <div class="select-list" ref="listContainer">
            <div
              class="divider-item"
              v-bind:key="index"
              v-for="(divider, index) in data"
              v-bind:class="[selected === divider.value ? 'selected' : '']"
              @click="getValue(divider.value)"
            >
              <div v-if="showLabel" class="divider-item--label">
                {{ divider.label }}
              </div>

              <div class="divider-item--preview">
                <div v-html="divider.shape"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputMixin from 'apostrophe/modules/@apostrophecms/schema/ui/apos/mixins/AposInputMixin';

export default {
  name: 'InputCustomSelect',
  mixins: [AposInputMixin],

  data() {
    const next = this.getNext();

    return {
      data: this?.field?.data || [],
      title: this?.field?.title || null,
      size: this?.field?.size || 'default',
      showLabel: this?.field?.showLabel || false,
      selected: next,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.scrollToSelected();
    });
  },

  methods: {
    validate(value) {
      if (this.field.required) {
        if (!value) {
          return 'required';
        }
      }
      return false;
    },

    getNext() {
      return this.modelValue?.data ? this.modelValue.data : null;
    },

    scrollToSelected() {
      const listContainer = this.$refs.listContainer;
      const selectedItem = listContainer.querySelector(".selected");

      if (selectedItem) {
        const offset = 20;

        listContainer.scrollTop = selectedItem.offsetTop - (selectedItem.offsetHeight + offset);
      }
    },

    getValue(value) {
      this.selected = value;
      this.next = value;
    },

    clear() {
      this.selected = null;
      this.next = {};
    },
  },
};
</script>

<style scoped lang="scss">
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label {
    padding: 8px 0;
    color: var(--a-text-primary);
    font-family: var(--a-family-default);
    font-size: var(--a-type-base);
    font-weight: var(--a-weight-base);
    letter-spacing: var(--a-letter-base);
    line-height: var(--a-line-base);
    line-height: var(--a-line-tall);
    color: var(--a-base-3);
  }

  .clear {
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
}

.select-list {
  width: 100%;
  max-height: 280px;
  min-height: 32px;
  padding: 16px;
  font-family: var(--a-family-default);
  background-color: var(--a-base-10);
  border: 1px solid var(--a-base-8);
  border-radius: var(--a-border-radius);
  overflow-y: auto;

  .small & {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    column-gap: 24px;
    row-gap: 8px;
  }

  :no(.small) & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.disabled {
    opacity: 0.6;
  }
}

.divider-item {
  max-width: 100%;
  margin: 8px 0;

  &--label {
    display: block;
    margin: 0 0 10px;
    color: var(--a-text-primary);
    font-family: var(--a-family-default);
    font-size: var(--a-type-base);
    font-weight: var(--a-weight-base);
    letter-spacing: var(--a-letter-base);
    line-height: var(--a-line-base);
    line-height: var(--a-line-tall);
    color: var(--a-base-3);
  }

  &--preview {
    // width: 100%;
    padding: 16px;
    background-color: #fff;
    border: 1px solid var(--a-base-8);
    border-radius: var(--a-border-radius);
  }

  &.selected {
    color: var(--a-primary);
    border-color: var(--a-primary);

    .divider-item--preview {
      border-color: var(--a-primary);
    }
  }

  &:hover:not(.selected) {
    cursor: pointer;

    .divider-item--preview {
      background-color: var(--a-base-10);
    }
  }
}
</style>
