import { handleSubmit } from '../client/js/formHandler'
	test('checking module', () => {
    expect(handleSubmit).toBeInstanceOf(Function)
})
	