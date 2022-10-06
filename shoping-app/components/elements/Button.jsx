import clsx from 'clsx'

export const Button = ({children , onClick , variant="primary" , className}) => {

  // creating some style in button so i can pass them to clsx
  const defaultStyle = "h-10 px-5 rounded-lg"

  const btnStyle = {
    primary: "text-white bg-slate-800 hover:bg-slate-900",
    secondary: "text-black bg-white hover:bg-slate-50",
    dark: "text-white bg-black hover:bg-black-700 rounded-none"
  }

  return(
    // adding clsx so taliwand can read class name 
    <button onClick={onClick} className={clsx(defaultStyle, btnStyle[variant], className && className)}>
      {children}

    </button>
  )


}
