import BaseInput from '../BaseInput/BaseInput'
import CheckboxesWidget from '../CheckboxesWidget/CheckboxesWidget'
import CheckboxWidget from '../CheckboxWidget/CheckboxWidget'
import RadioWidget from '../RadioWidget/RadioWidget'
import RangeWidget from '../RangeWidget/RangeWidget'
import TextareaWidget from '../TextareaWidget/TextareaWidget'
import UpDownWidget from '../UpDownWidget/UpDownWidget'
import { JSFSelect } from '~/components/jsonschema/VndlyJsonSchemaFormBase/widgets/select'
import ToggleWidget from '../ToggleWidget/ToggleWidget'
import { JSFDatePicker } from '~/components/jsonschema/chakraTheme/DateWidget'

const widgets = {
  BaseInput,
  CheckboxWidget,
  toggle: ToggleWidget,
  CheckboxesWidget,
  radio: RadioWidget,
  RangeWidget,
  select: JSFSelect,
  TextareaWidget,
  UpDownWidget,
  date: JSFDatePicker
}

export default widgets
