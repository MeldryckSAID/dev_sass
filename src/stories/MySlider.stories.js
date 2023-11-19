import MySlider from '../components/elements/MySlider.vue'

export default {
  title: 'Components/MySlider',
  component: MySlider,
  argTypes: {
    imageSRC: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
    people: {
      control: 'text'
    },
    grade: {
      control: 'text'
    },
    avis: {
      control: 'text'
    }
  }
}

export const Slider = {
  render: (args) => {
    return {
      components: {
        MySlider
      },
      setup() {
        return { args }
      },
      template: `<MySlider v-bind="args" />`
    }
  }
}
