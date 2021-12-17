import { Flex, useToast, Text, useColorModeValue } from '@chakra-ui/react'
import { SideSlider, MotionFlex, GoBack } from 'components'
import { Button1 } from 'components/Buttons'
import { ConnectedPasswordGroup } from 'components/FormElements'
import { Form, Formik, FormikProps } from 'formik'
import * as React from 'react'
import { VscMail } from 'react-icons/vsc'
import { useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import { SUCCESS_TOAST } from '../../constants'
import { PageWrap } from '../../layouts'
import { images } from '../../theme'
import { formatError } from '../../utils'
import strapiHelpers from '../../utils/strapiHelpers'

const ResetPasswordFormValidation = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('A password is required'),
  confirmPassword: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
})

type ResetPasswordProps = {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const toast = useToast()
  const location = useLocation()
  const history = useHistory()

  const INITIAL_VALUES = {
    password: '',
    confirmPassword: '',
    code: new URLSearchParams(location.search).get('code') as string
  }

  const bg = useColorModeValue('gray.100', 'brand.900')
  return (
    <PageWrap
      pt={0}
      align="center"
      justify="center"
      bg={bg}
      title="Reset Password"
      backgroundSize="cover"
      bgImage={`url(${images.bg})`}
    >
      <SideSlider title="Reset Password">
        <GoBack />
        <Formik
          validationSchema={ResetPasswordFormValidation}
          initialValues={INITIAL_VALUES}
          onSubmit={async ({ code, password, confirmPassword }, { setSubmitting, setStatus }) => {
            setStatus(null)
            try {
              setSubmitting(true)
              await strapiHelpers.resetPassword(code, password, confirmPassword)
              setSubmitting(false)
              toast({ description: 'Your password was updated.', ...SUCCESS_TOAST })
              history.push('/')
            } catch (error: any) {
              setStatus(formatError(error))
            }
          }}
        >
          {({ isSubmitting, status }: FormikProps<typeof INITIAL_VALUES>) => (
            <Form style={{ width: '100%' }}>
              <Flex mb={4}>
                <Text fontSize="sm">Please enter a new password below.</Text>
              </Flex>
              <ConnectedPasswordGroup name="password" label="Password" placeholder="Password" />
              <ConnectedPasswordGroup
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              {status && (
                <MotionFlex
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  justify="center"
                  mb={2}
                  width="100%"
                >
                  <Text textAlign="right" color="red.500">
                    {status}
                  </Text>
                </MotionFlex>
              )}
              <Button1 mt={4} icon={VscMail} type="submit" isLoading={isSubmitting}>
                Reset Password
              </Button1>
            </Form>
          )}
        </Formik>
      </SideSlider>
    </PageWrap>
  )
}

export default ResetPassword
