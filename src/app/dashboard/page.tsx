import React from 'react'
import { Value } from './component/value'

export default function Home() {
  return (
    <>
      <h4 className='main-title'>Hallo, Siswa/Siswi kami</h4>
      <div className="bio">
        <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className="list">

          <Value title='NIM' value='201111217' />
          <Value title='Nama' value='Abdillah Zikri Alhusni' />
          <Value title='Kelas' value='XII' />
        </div>
      </div>
      {/* <h4>Data Akademis</h4> */}
      <div className="data">
        <div className="left">
          <h4>Data Pribadi</h4>
          <div className="list-data">
            <Value title='NIK' value='1219011011020005' />
            <Value title='Jenis Kelamin' value='Laki-laki' />
            <Value title='Alamat' value='Jl.Jaya No.65 dusun jaya baru' />
            <Value title='Tanggal Lahir' value='10 November 2002' />
            <Value title='Tempat Lahir' value='Desa Pematang Cengkering' />
          </div>
        </div>
        <div className="right">
          <h4>Data Wali</h4>
          <div className="list-data">

            <Value title='Nama Wali' value='Bapak Gua' />

            <Value title='Pekerjaan' value='Wirausaha' />

            <Value title='Status' value='Ayah' />

            <Value title='No Telepon' value='082262679036' />
          </div>
        </div>
      </div>
    </>
  )
}
