import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { SideSlider, MotionFlex } from 'components'
import { Button1 } from 'components/Buttons'
import { ConnectedFormGroup, ConnectedPasswordGroup } from 'components/FormElements'
import { useAuthContext } from 'context/AuthProvider'
import { Form, Formik, FormikProps } from 'formik'
import * as React from 'react'
import { VscAdd } from 'react-icons/vsc'
import { Link, useHistory } from 'react-router-dom'

import * as Yup from 'yup'

import { PageWrap } from '../../layouts'
import { theme } from '../../theme'
import { formatError } from '../../utils'

type RegisterProps = {}

const RegisterFormValidation = Yup.object().shape({
  username: Yup.string().required('A username is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('An email address is required'),
  password: Yup.string()
    .min(8, 'Password has to be longer than 8 characters')
    .required('A password is required'),
  confirmPassword: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
})

type RegisterValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const Register: React.FC<RegisterProps> = () => {
  const { register, user, logout } = useAuthContext()

  const history = useHistory()

  React.useEffect(() => {
    if (user?.confirmed) {
      history.push('/auth/user-management')
    } else if (user) {
      history.push('/confirm-email')
      logout && logout()
    }
    // eslint-disable-next-line
  }, [user])

  const bg = useColorModeValue('gray.100', 'brand.900')
  return (
    <PageWrap
      pt={0}
      title="Register"
      align="center"
      bg={bg}
      justify="center"
      backgroundSize="cover"
    >
      <SideSlider title="Register">
        <Formik
          validationSchema={RegisterFormValidation}
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={async ({ username, email, password }, { setStatus, setSubmitting }) => {
            setStatus(null)
            try {
              setSubmitting(true)
              if (register) {
                await register(username, email, password)
              }
              setSubmitting(false)
            } catch (error: any) {
              setStatus(formatError(error))
            }
          }}
        >
          {({ isSubmitting, status }: FormikProps<RegisterValues>) => (
            <Form style={{ width: '100%' }}>
              <ConnectedFormGroup name="username" label="Username" placeholder="Username" />
              <ConnectedFormGroup name="email" label="Email" placeholder="Email" type="email" />
              <ConnectedPasswordGroup name="password" label="Password" placeholder="Password" />
              <ConnectedPasswordGroup
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              {status && (
                <MotionFlex initial={{ opacity: 0 }} animate={{ opacity: 1 }} mb={2} width="100%">
                  <Text textAlign="right" color="red.500">
                    {status}
                  </Text>
                </MotionFlex>
              )}
              <Button1 icon={VscAdd} isLoading={isSubmitting}>
                Register
              </Button1>

              <Flex mt={8} align="center" fontSize="sm" justify="center">
                <Text>
                  Already signed up?{' '}
                  <Link style={{ color: theme.colors.blue[500] }} to="/">
                    Login
                  </Link>{' '}
                </Text>
              </Flex>
            </Form>
          )}
        </Formik>
      </SideSlider>
    </PageWrap>
  )
}

export default Register
