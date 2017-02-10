import Form from './templates/Form';
import TextInput from './templates/TextInput';
import TextArea from './templates/TextArea';
import Select from './templates/Select';
import Submit from './templates/Submit';
import FieldSet from './templates/FieldSet';
import Actions from './templates/Actions';
import Button from './templates/Button';
import CheckBox from './templates/CheckBox';
import Number from './templates/Number';
import Radio from './templates/Radio';
import CheckBoxes from './templates/CheckBoxes';

const grommetSchemaFormComponentMap = {
  "form": Form,
  "text": TextInput,
  "textarea": TextArea,
  "select": Select,
  "submit": Submit,
  "fieldset": FieldSet,
  "actions": Actions,
  "button": Button,
  "checkbox": CheckBox,
  "checkboxes": CheckBoxes,
  "number": Number,
  "radios": Radio,
};

export default grommetSchemaFormComponentMap;
