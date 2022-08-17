<template>
	<div>
		<input
			v-bind="$attrs"
			@input="handleInput"
			@change="handleChange"
			@blur="handleBlur"
		/>
	</div>
</template>
<script>
export default {
	name: 'AlInput',
	inject: ['AlFormItem'],
	methods: {
		handleInput(evt) {
			this.$emit('update:value', evt.target.value);
			this.$emit('input', evt.target.value);
			this.AlFormItem.validate(evt.target.value);
		},
		handleChange(evt) {
			this.$emit('update:value', evt.target.value);
			this.$emit('change', evt.target.value);
			this.AlFormItem.validate(evt.target.value);
		},
		handleBlur(evt) {
			this.$emit('update:value', evt.target.value);
			this.$emit('blur', evt.target.value);
			this.AlFormItem.validate(evt.target.value);
		},
	},
};
</script>
