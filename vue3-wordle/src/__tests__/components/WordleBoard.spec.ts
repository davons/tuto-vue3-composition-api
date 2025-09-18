import { mount } from '@vue/test-utils'
import WordleBoard from '../../components/WordleBoard.vue';
import { VICTORY_MESSAGE } from '@/settings'

describe('WorldleBoard', () => {
  it('A vitrory message appears', async() => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: 'TESTS'}})
    const guessInput  = wrapper.find("input[type=text]")
    await guessInput.setValue("TESTS")
    await guessInput.trigger("keydown.enter")
    expect(wrapper.text()).toContain(VICTORY_MESSAGE) 
  })
})