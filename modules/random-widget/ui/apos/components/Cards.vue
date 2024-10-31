<template>
  <AposInputWrapper :modifiers="modifiers" :field="field" :error="effectiveError" :uid="uid"
    :display-options="displayOptions">
    <template #body>
      <div class="cards apos-input-wrapper">
        <div class="cards-list">
          <Card v-bind:key="index" v-for="(card, index) in data" :title="card.title" :value="card.value" />
        </div>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputMixin from 'Modules/@apostrophecms/schema/mixins/AposInputMixin';
import Card from "./Card";

export default {
  name: "Cards",
  mixins: [AposInputMixin],
  components: {
    Card,
  },

  data() {
    return {
      data: this?.field?.data || [],
    };
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
  }
};
</script>

<style scoped lang="scss">
.cards {
  position: relative;
  margin-bottom: 16px;
  font-family: var(--a-family-default);

  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    column-gap: 22px;
    row-gap: 22px;
    width: 100%;
  }
}
</style>
