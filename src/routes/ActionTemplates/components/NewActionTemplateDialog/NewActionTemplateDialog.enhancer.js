import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { formNames } from 'constants/paths'

export default compose(reduxForm({ form: formNames.newActionTemplate }))
