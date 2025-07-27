import { type FC } from "react";
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from "react-native";

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType;
};

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={props.placeholderImageSource} style={styles.image} />
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
