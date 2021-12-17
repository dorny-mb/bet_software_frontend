import { Flex, theme, Text, useColorModeValue } from '@chakra-ui/react'
import { SideSlider, MotionFlex, SocialButtons } from 'components'
import { Button1 } from 'components/Buttons'
import {
  ConnectedFormGroup,
  ConnectedPasswordGroup,
  ConnectedCheckbox
} from 'components/FormElements'
import { Form, Formik, FormikProps } from 'formik'
import { LocationDescriptorObject } from 'history'
import * as React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import { VscSignIn } from 'react-icons/vsc'

import { PageWrap } from '../../layouts'

import { formatError } from '../../utils'

import { useAuthContext } from 'context/AuthProvider'

const LoginFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('An email address is required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters')
    .required('A password is required')
})

type LoginProps = {}

type InitialValues = {
  email: string
  password: string
}

const Login: React.FC<LoginProps> = () => {
  const { login, isAuthenticated } = useAuthContext()
  const history = useHistory()
  const location = useLocation<{ email?: string; redirectTo?: LocationDescriptorObject }>()

  React.useEffect(() => {
    if (isAuthenticated) {
      let to: LocationDescriptorObject = { pathname: '/auth/user-management' }
      if (location.state?.redirectTo) {
        to = { pathname: location.state.redirectTo.pathname }
      }
      history.push(to)
    }
    // eslint-disable-next-line
  }, [isAuthenticated])
  const bg = useColorModeValue('gray.100', 'brand.900')
  return (
    <PageWrap align="center" title="Login" backgroundSize="cover" justify="center" bg={bg} pt={0}>
      <SideSlider title="Login">
        <Formik
          validationSchema={LoginFormValidation}
          initialValues={{
            email: location.state?.email || '',
            password: '',
            rememberMe: false
          }}
          onSubmit={async ({ email, password, rememberMe }, { setSubmitting, setStatus }) => {
            setStatus(null)
            try {
              setSubmitting(true)
              if (login) {
                await login(email, password, rememberMe)
              }
              setSubmitting(false)
            } catch (error: any) {
              setStatus(formatError(error))
            }
          }}
        >
          {({ isSubmitting, status }: FormikProps<InitialValues>) => (
            <Form autoComplete="off" style={{ width: '100%' }}>
              <ConnectedFormGroup name="email" label="Email" placeholder="Email" />
              <ConnectedPasswordGroup name="password" label="Password" placeholder="Password" />
              <ConnectedCheckbox mb={1} name="rememberMe" label="Remember Me" />
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
              <Button1 icon={VscSignIn} isLoading={isSubmitting}>
                Login
              </Button1>
              <Flex mb={4} mt={8} fontSize="sm" align="center" justify="center">
                <Text>
                  Don&apos;t have an account?{' '}
                  <Link style={{ color: theme.colors.blue[400] }} to="/register">
                    Sign Up
                  </Link>{' '}
                </Text>
              </Flex>
              <Flex mb={2} fontSize="sm" align="center" justify="center">
                <Link style={{ color: theme.colors.blue[400] }} to="/forgot-password">
                  Forgot Password
                </Link>{' '}
              </Flex>
            </Form>
          )}
        </Formik>
        <SocialButtons />
      </SideSlider>
    </PageWrap>
  )
}

export default Login
