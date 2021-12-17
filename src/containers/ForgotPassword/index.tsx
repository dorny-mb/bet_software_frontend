import { Flex, useToast, Text, useColorModeValue } from '@chakra-ui/react'
import { SideSlider, MotionFlex, GoBack } from 'components'
import { Button1 } from 'components/Buttons'
import { ConnectedFormGroup } from 'components/FormElements'
import { Form, Formik, FormikProps } from 'formik'
import * as React from 'react'

import { VscMail } from 'react-icons/vsc'

import * as Yup from 'yup'

import { SUCCESS_TOAST } from '../../constants'
import { PageWrap } from '../../layouts'

import { formatError } from '../../utils'
import strapiHelpers from '../../utils/strapiHelpers'

const ForgotPasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('An email address is required')
})

type ForgotPasswordProps = {}

type InitialValues = {
  email: string
}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const toast = useToast()

  const bg = useColorModeValue('gray.100', 'brand.900')
  return (
    <PageWrap
      pt={0}
      bg={bg}
      align="center"
      justify="center"
      backgroundSize="cover"
      title="Forgot Password"
    >
      <SideSlider title={'Forgot Password'}>
        <GoBack />
        <Formik
          validationSchema={ForgotPasswordValidation}
          initialValues={{
            email: ''
          }}
          onSubmit={async ({ email }, { setSubmitting, setStatus }) => {
            setStatus(null)
            try {
              setSubmitting(true)
              await strapiHelpers.forgotPassword(email)
              setSubmitting(false)
              toast({ description: 'Email sent. Please check your inbox.', ...SUCCESS_TOAST })
            } catch (error: any) {
              setStatus(formatError(error))
            }
          }}
        >
          {({ isSubmitting, status }: FormikProps<InitialValues>) => (
            <Form style={{ width: '100%' }}>
              <Flex mb={4}>
                <Text fontSize="sm">
                  Enter your email address below and we&apos;ll send you a link to reset your
                  password.
                </Text>
              </Flex>
              <ConnectedFormGroup name="email" label="Email" placeholder="Email" />
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

              <Button1 icon={VscMail} isLoading={isSubmitting}>
                Send
              </Button1>
            </Form>
          )}
        </Formik>
      </SideSlider>
    </PageWrap>
  )
}

export default ForgotPassword
