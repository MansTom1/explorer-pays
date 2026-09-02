/*function ProfilePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        Profil
      </h1>
    </main>
  )
}

export default ProfilePage  */

import { useNavigate } from 'react-router'

import { logout } from '../services/authService'

function ProfilePage() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        Profil
      </h1>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded border px-4 py-2"
      >
        Se déconnecter
      </button>
    </main>
  )
}

export default ProfilePage