import React, { useState, useEffect } from 'react'

interface TimeDisplayProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 pl-2.5 pr-2 py-2.5 bg-neutral-200 justify-center items-center inline-flex text-3xl font-medium">
        {days.toString().padStart(2, '0')}
      </div>
      <span className="text-neutral-400 text-sm">Days</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 pl-2.5 pr-2 py-2.5 bg-neutral-200 justify-center items-center inline-flex text-3xl font-medium">
        {hours.toString().padStart(2, '0')}
      </div>
      <span className="text-neutral-400 text-sm">Hours</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 pl-2.5 pr-2 py-2.5 bg-neutral-200 justify-center items-center inline-flex text-3xl font-medium">
        {minutes.toString().padStart(2, '0')}
      </div>
      <span className="text-neutral-400 text-sm">Minutes</span>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 pl-2.5 pr-2 py-2.5 bg-neutral-200 justify-center items-center inline-flex text-3xl font-medium">
        {seconds.toString().padStart(2, '0')}
      </div>
      <span className="text-neutral-400 text-sm">Seconds</span>
    </div>
  </div>
)

const CountDown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0)

  useEffect(() => {
    let remainingTime = 143805012
    const countdownInterval = setInterval(() => {
      remainingTime -= 1000

      if (remainingTime <= 0) {
        remainingTime = 0
        clearInterval(countdownInterval)
        alert('Offer has expired!')
      }

      setTimeRemaining(remainingTime)
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [])

  const formatTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / (1000 * 60)) % 60)
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

    return (
      <TimeDisplay
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )
  }

  return <div>{formatTime(timeRemaining)}</div>
}

export default CountDown
