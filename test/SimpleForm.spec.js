import sinon from 'sinon';
import { mount, shallowMount } from "@vue/test-utils";
import SimpleForm from "@/components/simpleFormComponent.vue";

describe("SimpleForm", () => {
  test("Simple Form usage", () => {
    const wrapper = mount(SimpleForm);
    
    const nameInput = wrapper.find('input[name="name"]');
    const lastnameInput = wrapper.find('input[name="lastname"]');
    nameInput.setValue('John');
    lastnameInput.setValue('Perez');
    
    const nameDiv = wrapper.find('div[class="display"]');
    expect(nameDiv.text()).toBe('John Perez')
  });

  test("Simple Form submit", () => {
    const wrapper = shallowMount(SimpleForm, {
      attachToDocument: true
    });

    const divClicked = wrapper.find(".clicked");
    expect(divClicked.isVisible()).toBe(false);

    // CSS Selector
    const submitBtn = wrapper.find('button[type="submit"]');
    submitBtn.trigger('click');

    expect(divClicked.isVisible()).toBe(true);
  });

  test("Prop Clicked", () => {
    const clickHandler = sinon.stub();
    const wrapper = mount(SimpleForm, {
      propsData: { onExternalClick: clickHandler }
    });

    expect(clickHandler.called).toBe(false);
    const clickBtn = wrapper.find('.clickme');
    clickBtn.trigger('click');
    expect(clickHandler.called).toBe(true);
  });
});
