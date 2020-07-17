import React from 'react'; 

export default function withForm(Cmp, initialState, schema) {
    return class extends React.Component {
        state = {
            form: initialState,
            errors: null
        };

        controlChangeHandlerFactory = name  => { // throttleTime {
            let id;
            return e => {
                const newValue = e.target.value;
                if(id){ clearTimeout(id); id = null; }
                id = setTimeout(() => {
                    this.setState(({ form}) => {
                        return { form: {...form, [name]: newValue }};
                    });
                  id = null;
                }, 200);
            };
        };                                         //}

        getFormState = () => {
            return this.state.form;
        };

        runValidations = () => {
            return schema && schema.validate(this.state.form, { abortEarly: false })
              .then(() => {
                this.setState({ errors: undefined });
                return this.state.form;
              }).catch(err => {
                const errors = err.inner.reduce((acc, { path, message }) => {
                  acc[path] = (acc[path] || []).concat(message);
                  return acc;
                }, {});
                this.setState({ errors });
              }) || Promise.resolve();
          }

        render() {
            return <Cmp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory} runValidations={this.runValidations} getFormState={this.getFormState}></Cmp>
        }
    }
}
