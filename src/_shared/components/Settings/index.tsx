import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Color from '../../utils/Color';
import Font from '../../utils/Font';
import Menu from '../../components/Partials/Menu';
import Switch from './../Partials/Switch/index';
import Modal from 'react-native-modal';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { onScrollEvent } from '../../utils/AnimationHelpers';
import Animated, {
  cond,
  eq,
  useCode,
  call,
  onChange,
} from 'react-native-reanimated';
import Radio from '../Partials/Radio';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND,
  },
  text: {
    fontSize: 20,
    color: Color.TEXTPRIMARY,
    fontFamily: Font.MEDIUM,
  },
});

const Toggler = ({
  title,
  action,
  active,
  subTitle,
}: {
  title: string;
  action: Function;
  active: boolean;
  subTitle?: string;
}) => {
  return (
    <View
      style={{
        width: width - 60,
        marginBottom: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Text
          style={{
            fontFamily: Font.MEDIUM,
            fontSize: 16,
            color: Color.TEXTPRIMARY,
            paddingBottom: 10,
          }}>
          {title}
        </Text>
        <Switch
          onChangeValue={(value: boolean) => {
            if (typeof action === 'function') {
              action(value);
            }
          }}
          checked={active}
        />
      </View>
      {subTitle && (
        <View
          style={{
            width: '70%',
          }}>
          <Text
            style={{
              fontFamily: Font.MEDIUM,
              fontSize: 12,
              color: Color.TEXTSECONDARY,
            }}>
            {subTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

const RadioList = ({
  items,
  // eslint-disable-next-line no-shadow
  onChange,
}: {
  items: Array<{ label: string; value: any }>;
  onChange: Function;
}) => {
  const [selected, setSelected] = useState(
    items.reduce(
      (prev: any, _, key: number) => ({ ...prev, [`radio_${key}`]: false }),
      {},
    ),
  );
  const [current, setCurrent] = useState('');

  const handleRadioSelect = (key: string) => {
    setSelected((prev: any) => ({
      ...prev,
      [key]: true,
      ...(current ? { [current]: false } : {}),
    }));
  };

  return (
    <>
      {items &&
        Array.isArray(items) &&
        items.map((value: any, key: number) => {
          return (
            <TouchableNativeFeedback
              key={key}
              style={{
                paddingVertical: 20,
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight: 10,
                  }}>
                  <Radio
                    isSelected={selected[`radio_${key}`]}
                    onPress={() => {
                      handleRadioSelect(`radio_${key}`);
                      setCurrent(`radio_${key}`);
                      if (onChange && typeof onChange === 'function') {
                        onChange(value);
                      }
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: Font.NORMAL,
                    fontSize: 14,
                    color: Color.PRIMARY,
                  }}>
                  Analog
                </Text>
              </View>
            </TouchableNativeFeedback>
          );
        })}
    </>
  );
};
const ModalSelector = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const top = new Animated.Value(0);
  const scrollEvent = onScrollEvent({ y: top });
  useCode(() => call([top], console.log), [top]);
  const [selected, setSelected] = useState({});
  console.log(selected);
  return (
    <View
      style={{
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Text
        style={{
          fontFamily: Font.MEDIUM,
          fontSize: 16,
          color: Color.TEXTPRIMARY,
          paddingBottom: 10,
        }}>
        Home time zone
      </Text>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
        }}>
        <Text
          style={{
            fontFamily: Font.NORMAL,
            fontSize: 14,
            color: Color.PRIMARY,
          }}>
          Los Angeles/America
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={modalOpen}
        backdropColor={Color.DARK}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        backdropOpacity={0.5}>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={Color.alphaDark(0.5)}
        />
        <View
          style={{
            backgroundColor: Color.SECONDARY,
            borderRadius: 10,
            width: width * 0.85,
            maxHeight: height * 0.8,
          }}>
          <Animated.View
            style={{
              justifyContent: 'center',
              paddingBottom: 20,
              borderBottomColor: Color.BACKGROUND,
              borderBottomWidth: cond(eq(top, 0), 0, 1),
              padding: 20,
            }}>
            <Text
              style={{
                fontFamily: Font.MEDIUM,
                fontSize: 20,
                color: Color.TEXTPRIMARY,
              }}>
              Time zone
            </Text>
          </Animated.View>
          <Animated.ScrollView
            onScroll={scrollEvent}
            contentContainerStyle={{
              paddingBottom: 20,
            }}>
            <RadioList
              onChange={setSelected}
              items={Array(20).fill({ value: 8, label: 'Anaolo' })}
            />
          </Animated.ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 20,
              borderTopColor: Color.BACKGROUND,
              borderTopWidth: 1,
            }}>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Text
                style={{
                  fontFamily: Font.MEDIUM,
                  fontSize: 14,
                  color: Color.PRIMARY,
                }}>
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const Settings = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 30,
          justifyContent: 'center',
          borderBottomColor: Color.DARK,
          borderBottomWidth: 1,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            paddingBottom: 30,
          }}>
          <Text style={styles.text}>Clock</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: Font.MEDIUM,
                fontSize: 16,
                color: Color.TEXTPRIMARY,
                paddingBottom: 10,
              }}>
              Style
            </Text>
            <Menu
              style={{
                elevation: 0,
                width: 130,
                borderRadius: 5,
              }}
              textStyle={{
                paddingHorizontal: 10,
              }}
              menuItems={[
                { title: 'Analog', action: () => console.log('Analog') },
                { title: 'Digital', action: () => console.log('Digital') },
              ]}
              TriggerComponent={() => (
                <Text
                  style={{
                    fontFamily: Font.NORMAL,
                    fontSize: 14,
                    color: Color.PRIMARY,
                  }}>
                  Analog
                </Text>
              )}
            />
          </View>

          <Toggler
            action={() => console.log('Display time with seconds')}
            title={'Display time with seconds'}
            active={true}
          />
          <Toggler
            action={() => console.log('Automatic home clock')}
            title={'Automatic home clock'}
            active={true}
            subTitle={`While traveling to area where the time is different from home add a clock for home.
            `}
          />

          <ModalSelector />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: Font.MEDIUM,
                fontSize: 16,
                color: Color.TEXTPRIMARY,
                paddingBottom: 10,
              }}>
              Change date and time
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: Font.MEDIUM,
                fontSize: 16,
                color: Color.TEXTPRIMARY,
                paddingBottom: 10,
              }}>
              Language
            </Text>
            <Menu
              style={{
                elevation: 0,
                width: 130,
                borderRadius: 5,
              }}
              textStyle={{
                paddingHorizontal: 10,
              }}
              menuItems={[
                { title: 'English', action: () => console.log('English') },
                { title: 'German', action: () => console.log('German') },
              ]}
              TriggerComponent={() => (
                <Text
                  style={{
                    fontFamily: Font.NORMAL,
                    fontSize: 14,
                    color: Color.PRIMARY,
                  }}>
                  English
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
