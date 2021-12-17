import React, { useEffect } from 'react'

import { useHistory, useLocation, useParams } from 'react-router-dom'

import { PageWrap } from '../../layouts'
import { FillLoader } from 'components'
import { useAuthContext } from 'context/AuthProvider'

const SSOLoginRedirect: React.FC = () => {
  const location = useLocation()
  const params = useParams<{ providerName: string }>()
  const history = useHistory()
  const { isAuthenticated, socialAuth } = useAuthContext()

  useEffect(() => {
    if (isAuthenticated) {
      history.push({ pathname: '/auth' })
    }
    // eslint-disable-next-line
  }, [isAuthenticated])
  useEffect(() => {
    ;(async () => {
      if (socialAuth) {
        try {
          await socialAuth(params.providerName, location.search)
        } catch {
          history.push({ pathname: '/' })
        }
      }
    })()
  }, [socialAuth, params.providerName, location.search])

  return (
    <PageWrap align="center" title="Redirect" backgroundSize="cover" justify="center" pt={0}>
      <FillLoader />
    </PageWrap>
  )
}

export default SSOLoginRedirect
