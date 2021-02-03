import { Flex, Box, Stack } from '@chakra-ui/react'
import { isMultiSelect, getDefaultRegistry } from 'react-jsonschema-form/lib/utils'
import React from 'react'
import AddButton from '../AddButton/AddButton'
import IconButton from '../IconButton/IconButton'

const ArrayFieldTemplate = props => {
  const { schema, registry = getDefaultRegistry() } = props

  if (isMultiSelect(schema, registry.rootSchema)) {
    return <DefaultFixedArrayFieldTemplate {...props} />
  }
  return <DefaultNormalArrayFieldTemplate {...props} />
}

const ArrayFieldTitle = ({ TitleField, idSchema, title, required }) => {
  if (!title) {
    return <div />
  }

  const id = `${idSchema.$id}__title`
  return <TitleField id={id} title={title} required={required} />
}

const ArrayFieldDescription = ({ DescriptionField, idSchema, description }) => {
  if (!description) {
    return <div />
  }

  const id = `${idSchema.$id}__description`
  return <DescriptionField id={id} description={description} />
}

// Used in the two templates
const DefaultArrayItem = ({
  index,
  children,
  hasToolbar,
  hasMoveUp,
  hasMoveDown,
  disabled,
  readonly,
  hasRemove,
  onReorderClick,
  onDropIndexClick
}) => {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold'
  }
  return (
    <Flex key={index} alignItems="center">
      <Box flexGrow={1} p={2} mb={2}>
        {children}
      </Box>

      {hasToolbar && (
        <Box>
          {(hasMoveUp || hasMoveDown) && (
            <IconButton
              icon="arrow-up"
              className="array-item-move-up"
              tabIndex={-1}
              style={btnStyle}
              isDisabled={disabled || readonly || !hasMoveUp}
              onClick={onReorderClick(index, index - 1)}
            />
          )}

          {(hasMoveUp || hasMoveDown) && (
            <IconButton
              icon="arrow-down"
              tabIndex={-1}
              style={btnStyle}
              isDisabled={disabled || readonly || !hasMoveDown}
              onClick={onReorderClick(index, index + 1)}
            />
          )}

          {hasRemove && (
            <IconButton
              icon="remove"
              tabIndex={-1}
              style={btnStyle}
              isDisabled={disabled || readonly}
              onClick={onDropIndexClick(index)}
            />
          )}
        </Box>
      )}
    </Flex>
  )
}

const DefaultFixedArrayFieldTemplate = ({
  className,
  idSchema,
  TitleField,
  title,
  required,
  schema,
  uiSchema,
  items,
  canAdd,
  onAddClick,
  disabled,
  readonly
}) => {
  return (
    <fieldset className={className}>
      <ArrayFieldTitle
        key={`array-field-title-${idSchema.$id}`}
        TitleField={TitleField}
        idSchema={idSchema}
        title={uiSchema['ui:title'] || title}
        required={required}
      />

      {(uiSchema['ui:description'] || schema.description) && (
        <div className="field-description" key={`field-description-${idSchema.$id}`}>
          {uiSchema['ui:description'] || schema.description}
        </div>
      )}

      <div className="row array-item-list" key={`array-item-list-${idSchema.$id}`}>
        {items && items.map(DefaultArrayItem)}
      </div>

      {canAdd && <AddButton className="array-item-add" onClick={onAddClick} disabled={disabled || readonly} />}
    </fieldset>
  )
}

const DefaultNormalArrayFieldTemplate = ({
  idSchema,
  TitleField,
  DescriptionField,
  uiSchema,
  schema,
  title,
  required,
  items,
  canAdd,
  onAddClick,
  disabled,
  readonly
}) => {
  return (
    <Box p={2}>
      <ArrayFieldTitle
        key={`array-field-title-${idSchema.$id}`}
        TitleField={TitleField}
        idSchema={idSchema}
        title={uiSchema['ui:title'] || title}
        required={required}
      />

      {(uiSchema['ui:description'] || schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${idSchema.$id}`}
          DescriptionField={DescriptionField}
          idSchema={idSchema}
          description={uiSchema['ui:description'] || schema.description}
        />
      )}

      <Stack key={`array-item-list-${idSchema.$id}`}>
        {items && items.map(p => DefaultArrayItem(p))}

        {canAdd && (
          <Flex justify="flex-end">
            <Box mt={2}>
              <AddButton onClick={onAddClick} isDisabled={disabled || readonly} />
            </Box>
          </Flex>
        )}
      </Stack>
    </Box>
  )
}

export default ArrayFieldTemplate
