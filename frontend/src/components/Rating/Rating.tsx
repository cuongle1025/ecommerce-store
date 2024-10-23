import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'

interface Props {
  readOnly?: boolean
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#343839',
  },
  '& .MuiRating-iconHover': {
    color: '#343839',
  },
})

export default function CustomizedRating({ readOnly }: Props) {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <StyledRating
        name="star-rating"
        defaultValue={2}
        getLabelText={(value: number) =>
          `${value} Star${value !== 1 ? 's' : ''}`
        }
        precision={0.5}
        size="small"
        readOnly={readOnly}
      />
    </Box>
  )
}
