<template>
  <div class="card" v-bind:class="[value === 'soon' ? 'card-soon' : (!!value ? 'enabled' : 'disabled') ]">
    <h3>{{ title }}</h3>

    <div class="state" v-if="(value !== 'soon')">
      <span class="circle" />
      <span>{{ !!value ? "Enabled" : "Disabled" }}</span>
    </div>

    <div class="state soon" v-if="(value === 'soon')">
      <span>Coming soon</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    value: Boolean | String,
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 16px;
  font-family: var(--a-family-default);
  background-color: var(--a-base-10);
  border: 1px solid var(--a-base-8);
  border-radius: var(--a-border-radius);

  &.card-soon,
  &.disabled {
    opacity: 0.7;
  }

  h3 {
    margin: 0 0 16px 0;
    font-size: var(--a-type-large);
  }
}

.state {
  display: flex;
  align-items: center;
  height: 20px;
  font-size: var(--a-type-base);

  &.soon {
    margin-right: auto;
    padding: 4px 8px;
    color: var(--a-primary);
    background-color: var(--a-primary-transparent-10);
    border-radius: var(--a-border-radius);
  }
}

.circle {
  display: block;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 12px;

  .enabled & {
    background-color: var(--a-success);
  }

  .disabled & {
    background-color: var(--a-danger);
  }
}
</style>
