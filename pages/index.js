import Head from 'next/head'
import closeOpenFuncFirst from '../public/lib/js/first'
import closeOpenFuncSecond from '../public/lib/js/secondary'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/css/style.css" rel="stylesheet" />
      </Head>

      <main>
        <h1 className="title">🔥EG Item Generator🔥</h1>
        <a href="/overview" className="btn btn-primary mt-5">Overview</a>
        <div className="flex">
        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-warning">Player. 1</h2>
              <a href="javascript:void(0);" className="btn btn-warning btn-sm text-white summary_btn first"
            onClick={closeOpenFuncFirst}>Open</a>
            </div>
            <h3 className="mt-5"></h3>  
            <div className="summary-box first">
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
              </iframe>
            </div>
          </div>
        </div>

        <div className="grid">
          <div href="https://nextjs.org/docs" className="card">
            <div className="sizser">
              <h2 className="mr-5 text-success">Player. 2</h2>  
              <a href="javascript:void(0);"
                  className="btn btn-success btn-sm text-white summary_btn second"
            onClick={closeOpenFuncSecond}>Open</a>
            </div>
            <h3 className="mt-5">{randomExtract(occupations_jp)[1]}</h3>
            <div
              className="summary-box second"
            >
              <iframe src="https://tango-gacha.com/#word"
              width="100%" height="500" frameborder="0"
              allowfullscreen sandbox>
              </iframe>
            </div>
          </div>
        </div>
        </div>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
