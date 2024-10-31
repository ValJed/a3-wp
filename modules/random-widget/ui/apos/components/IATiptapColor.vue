<template>
  <div class="ia-tiptap-color">
    <AposButton type="rich-text" @click="togglePicker" class="apos-rich-text-editor__control ia-tiptap-color__button"
      :label="tool.label" :icon-only="true" :icon="'palette-icon'" :icon-size="16"
      :modifiers="['no-border', 'no-motion']" />
    <div class="ia-tiptap-color__preview" :style="colors[active] && '--color-code:' + colors[active].code"></div>
    <ul class="ia-tiptap-color__list" v-show="pickerVisible">
      <label for="pick" class="ia-tiptap-color__item picker_outer">
        <input id="pick" class="ia-tiptap-color_picker" type="color"
          @input="editor.chain().focus().setColor($event.target.value).run()"
          :value="editor.getAttributes('textStyle').color">

        <span>Color picker</span>
      </label>

      <li v-for="(color, i) in colors" :key="color.label">
        <button class="ia-tiptap-color__item" :class="{
          'ia-tiptap-color__item--default': color.code === 'inherit',
          'ia-tiptap-color__item--active': active === i
        }" :style="'--color-code:' + color.code" @click="() => setColor(i)">
          <span class="ia-tiptap-color__item_preview" :class="{
            'ia-tiptap-color__item_preview--white': color.code === '#fff'
          }"></span>
          {{ color.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .ia-tiptap-color {
    position: relative;

    &__list {
      position: absolute;
      top: 100%;
      min-width: 150px;
      padding: 8px;
      background-color: #fff;
      box-shadow: 0 4px 16px 0 rgba(0 0 0 / 26%);
      list-style-type: none;

      > li {
        margin-bottom: 6px;
      }
    }

    &_picker {
      display: block;
      flex-shrink: 0;
      width: 30px;
      height: 24px;
      margin: 8px 8px 6px 0;
      border: none;
    }

    &__item {
      appearance: none;
      display: flex;
      align-items: center;
      background: none;
      border: none;

      &_preview {
        display: block;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        background-color: var(--color-code);
        border-radius: 20px;

        &--white {
          box-shadow: 0 0 1px rgba(0 0 0 / 100%);
        }
      }

      &.picker_outer {
        margin-bottom: 6px;
        border-bottom: 1px solid rgba(0 0 0 / 26%);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>

<script>
export default {
  name: 'IATiptapColor',
  props: {
    name: {
      type: String,
      required: true,
    },
    editor: {
      type: Object,
      required: true,
    },
    tool: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      pickerVisible: false,
    }
  },
  computed: {
    active() {
      for (let i = 0; i < this.colors.length; i++) {
        const color = this.colors[i]
        if (this.editor.isActive('textStyle', { color: color.code })) {
          return i
        }
      }
      return 0
    },
    colors() {
      const { defaultOptions } = window.apos.modules['@apostrophecms/rich-text-widget']
      return this.options.colors || defaultOptions.colors || []
    },
  },
  methods: {
    togglePicker() {
      this.pickerVisible = !this.pickerVisible
    },
    setColor(index) {
      const color = this.colors[index]
      this.editor.commands.focus()
      this.editor.commands.setColor(color.code)
      this.togglePicker()
    },
  },
}
</script>
