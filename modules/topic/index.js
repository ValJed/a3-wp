
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Topic'
  },
  filters: {
    add: {
      test: {
        label: 'apostrophe:type',
        choices: [
          {
            label: 'Val 1',
            value: 'val1'
          },
          {
            label: 'Val 2',
            value: 'val2'
          }
        ],
        def: null
      }
    },
    remove: [ 'visibility' ]
  },
  fields: {
    add: {
      orderReady: {
        label: 'I am ready to order?',
        type: 'boolean'
      },
      hasCoupon: {
        label: 'I have a coupon',
        type: 'boolean',
        if: {
          orderReady: true
        }
      },
      coupon: {
        label: 'Coupon',
        type: 'string',
        help: 'Enter a coupon. On the 10th order, write "ORDER10" to get a discount!',
        required: true,
        if: {
          orderReady: true,
          // leave $or condition above others to check that they will run after it
          $or: [
            { hasCoupon: true },
            { 'getOrdersCount()': 10 }
          ]
        }
      },
      range: {
        label: 'Range',
        type: 'range',
        min: 1,
        max: 40
      },
      color: {
        label: 'Color',
        type: 'color'
      },
      description: {
        label: 'Description',
        type: 'string'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'orderReady',
          'hasCoupon',
          'coupon',
          'description',
          'color'
        ]
      }
    }
  },
  methods(self) {
    return {
      getOrdersCount() {
        return 9;
      },
      getChapters(req, data) {
        return [
          {
            label: 'Chapter 1',
            value: 1
          },
          {
            label: 'Chapter 2',
            value: 2
          }
        ];
      }
    };
  }
};
