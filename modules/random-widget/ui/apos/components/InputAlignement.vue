<template>
  <AposInputWrapper :modifiers="modifiers" :field="field" :error="effectiveError" :uid="uid"
    :display-options="displayOptions">
    <template #body>
      <div class="apos-input-wrapper">
        <Tabs v-bind:tabs="tabs" @get-tab-index="getTabIndex">
          <div v-for="(item, index) in tabs" :key="item.value">
            <Alignment v-if="tabIndex === index"
              v-bind:value="item.shortenValue && item.only ? align : align[item.value]"
              v-bind:only="item.only"
              v-bind:clearButton="item.clearButton" v-bind:shortenValue="item.shortenValue"
              @get-values="(v) => getValues(v)" />
          </div>
        </Tabs>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputMixin from 'apostrophe/modules/@apostrophecms/schema/ui/apos/mixins/AposInputMixin';
import TabsVue from './Tabs'
import AlignmentVue from './Alignment'

const TABS_LIST = {
  default: {
    label: "All devices",
    value: "default"
  },
  mobile: {
    label: "Mobile",
    value: "mobile"
  },
  desktop: {
    label: "Desktop",
    value: "desktop"
  }
};

const getTabs = (t) => {
  if (Array.isArray(t)) {
    const tabsConstructor = t.reduce((acc, cur) => {
      const { options, ...rest } = cur;
      acc.push({ ...rest, ...options });
      return acc;
    }, []);

    return tabsConstructor;
  }

  const arrayFromT = t.split(",").length > 1 ? t.split(",") : false;

  if (arrayFromT) {
    const tabsConstructor = arrayFromT.reduce((acc, cur) => {
      acc.push(TABS_LIST[cur]);
      return acc;
    }, []);

    return tabsConstructor;
  } else if (t && typeof TABS_LIST[t] !== "undefined") {
    return [TABS_LIST[t]];
  } else {
    return [TABS_LIST["default"]];
  }
};

export default {
  name: 'InputAlignement',
  mixins: [AposInputMixin],
  components: {
    Tabs: TabsVue,
    Alignment: AlignmentVue,
  },

  data() {
    const next = this.getNext();

    console.log('this.next', next)
    return {
      tabs: this?.field?.tabs ? getTabs(this?.field?.tabs) : getTabs(''),
      tabIndex: 0,
      align: next,
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

    getNext() {
      return this.align || this.modelValue?.data || null;
    },

    getValues(el) {
      if (
        this.tabs.length <= 1 &&
        this.tabs[this.tabIndex].shortenValue &&
        this.tabs[this.tabIndex].only
      ) {
        this.align = el;
        this.next = el;
      } else {
        this.align = {
          ...this.align,
          [this.tabs[this.tabIndex].value.toLowerCase()]: el,
        };

        this.next = {
          ...this.next,
          [this.tabs[this.tabIndex].value.toLowerCase()]: el,
        };
      }
    },

    getTabIndex(index) {
      this.tabIndex = index;
    },
  },
};
</script>
