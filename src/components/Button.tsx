
import { Button as ButtonNativeComponent, IButtonProps, Heading } from "native-base"

type ButtonProps = {
  title: string
} & IButtonProps

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeComponent 
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeComponent>
  )
}