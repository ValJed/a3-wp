<template>
  <div class="wrap">
    <svg
      v-if="icon === 'h-left'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 3C5.22386 3 5 3.22386 5 3.5V20.5C5 20.7761 5.22386 21 5.5 21C5.77614 21 6 20.7761 6 20.5V3.5C6 3.22386 5.77614 3 5.5 3ZM8.5 9C8.22386 9 8 9.22386 8 9.5V14.5C8 14.7761 8.22386 15 8.5 15H18.5C18.7761 15 19 14.7761 19 14.5V9.5C19 9.22386 18.7761 9 18.5 9H8.5Z"
        :fill="color || 'currentColor'"
      />
    </svg>

    <svg
      v-if="icon === 'h-center'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 3C12.2239 3 12 3.22386 12 3.5V9H7.5C7.22386 9 7 9.22386 7 9.5V14.5C7 14.7761 7.22386 15 7.5 15H12V20.5C12 20.7761 12.2239 21 12.5 21C12.7761 21 13 20.7761 13 20.5V15H17.5C17.7761 15 18 14.7761 18 14.5V9.5C18 9.22386 17.7761 9 17.5 9H13V3.5C13 3.22386 12.7761 3 12.5 3Z"
        :fill="color || 'currentColor'"
      />
    </svg>

    <svg
      v-if="icon === 'h-right'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5 3C18.2239 3 18 3.22386 18 3.5V20.5C18 20.7761 18.2239 21 18.5 21C18.7761 21 19 20.7761 19 20.5V3.5C19 3.22386 18.7761 3 18.5 3ZM5.5 9C5.22386 9 5 9.22386 5 9.5V14.5C5 14.7761 5.22386 15 5.5 15H15.5C15.7761 15 16 14.7761 16 14.5V9.5C16 9.22386 15.7761 9 15.5 9H5.5Z"
        :fill="color || 'currentColor'"
      />
    </svg>

    <svg
      v-if="icon === 'v-top'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 5.5C21 5.22386 20.7761 5 20.5 5H3.5C3.22386 5 3 5.22386 3 5.5C3 5.77614 3.22386 6 3.5 6H20.5C20.7761 6 21 5.77614 21 5.5ZM15 8.5C15 8.22386 14.7761 8 14.5 8H9.5C9.22386 8 9 8.22386 9 8.5V18.5C9 18.7761 9.22386 19 9.5 19H14.5C14.7761 19 15 18.7761 15 18.5V8.5Z"
        :fill="color || 'currentColor'"
      />
    </svg>

    <svg
      v-if="icon === 'v-center'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 6.5C15 6.22386 14.7761 6 14.5 6H9.5C9.22386 6 9 6.22386 9 6.5V11H3.5C3.22386 11 3 11.2239 3 11.5C3 11.7761 3.22386 12 3.5 12H9V16.5C9 16.7761 9.22386 17 9.5 17H14.5C14.7761 17 15 16.7761 15 16.5V12H20.5C20.7761 12 21 11.7761 21 11.5C21 11.2239 20.7761 11 20.5 11H15V6.5Z"
        :fill="color || 'currentColor'"
      />
    </svg>

    <svg
      v-if="icon === 'v-bottom'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 15.5C9 15.7761 9.22386 16 9.5 16H14.5C14.7761 16 15 15.7761 15 15.5V5.5C15 5.22386 14.7761 5 14.5 5H9.5C9.22386 5 9 5.22386 9 5.5V15.5ZM21 18.5C21 18.2239 20.7761 18 20.5 18H3.5C3.22386 18 3 18.2239 3 18.5C3 18.7761 3.22386 19 3.5 19H20.5C20.7761 19 21 18.7761 21 18.5Z"
        :fill="color || 'currentColor'"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AlignLeft",
  props: {
    icon: {
      type: String,
      default: "v-left",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },

  computed: {
    values() {
      return {
        icon: this.icon,
        color: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 24px;
  height: 24px;
}
</style>
