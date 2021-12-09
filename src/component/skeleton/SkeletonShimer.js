import React, {useEffect,createRef} from 'react'
import {View,Animated, Dimensions} from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
 
const {width, height} = Dimensions.get('window');

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const SkeletonShimer = ({visible}) => {
 
  // Handle animation
  const avatarRef = createRef()
  const secondLineRef = createRef()
 
  useEffect(() => {
    const facebookAnimated = Animated.stagger(
      400,
      [
        avatarRef.current.getAnimated(),
        Animated.parallel([
          secondLineRef.current.getAnimated(),
        ])
      ]
    );
    Animated.loop(facebookAnimated).start();
  }, [])
 
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder
          ref={avatarRef}
          stopAutoRun
          visible={visible}
          height= {120}
          width= {width/3}
          style={{borderRadius: 20, marginBottom: height/13}}
        />
        <View style={{ justifyContent: "flex-start",alignItems: 'center', flexDirection: "row" }}>
          <ShimmerPlaceholder
            ref={secondLineRef}
            stopAutoRun
            visible={visible}
            height= {100}
            width= {width/1.8}
            style={{borderRadius: 20, marginBottom: height/13}}
          />
        </View>
      </View>
    </View>
  )
}

export default SkeletonShimer;