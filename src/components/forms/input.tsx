import _ from 'lodash'
interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  isImportant?:boolean;
  label?:string;
}

const FormInput = (props: IFormInput) => {
  const inputProps = _.omit(props, ['label', 'isImportant'])
  return (
    <>
      {props.label && (
        <div
          style={{ fontFamily:'inter' }}
          className="mb-2 font-medium  text-medium"
        >
          {props.label} {props.isImportant && <span className='text-red-400'>*</span>}
        </div>
      )}
      <input
        type="text"
        className="border appearance-none  rounded-md  outline-none h-12 px-3 py-2 box-border w-full focus:outline-none"
        style={{
          border: '1px solid #D0D5DD',
          fontFamily:'inter'
        }}
        {...inputProps}
      />
    </>
  )
}

export default FormInput
