import { type FC } from "react";
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from "react-native";

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string | null;
};

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  const imageSource = props.selectedImage
    ? { uri: props.selectedImage }
    : props.placeholderImageSource;
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
