import _ from 'lodash'


const FormInput = (props: any) => {
  const inputProps = _.omit(props, ['label'])
  return (
    <>
      {props.label && (
        <div
          style={{ fontFamily: 'saliec' }}
          className="mb-2 font-medium text-sm"
        >
          {props.label}
        </div>
      )}
      <input
        type="text"
        className="border appearance-none rounded  outline-none h-12 px-3 py-2 box-border w-full focus:outline-none"
        style={{
          background: '#FFF8E1',
          border: '1px solid lightgray',
          fontFamily: 'saliec',
        }}
        {...inputProps}
      />
    </>
  )
}

export default FormInput
