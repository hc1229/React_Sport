import {
  StyleSheet
} from 'react-native';

import {
  colors
} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.whiteSmoke,
    marginTop: 64
  },
  applyView: {
    margin: 7,
  },
  filtersView: {
    margin: 5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  applyViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  applySavedCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  applyViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  clearAllCell: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    backgroundColor: 'white'
  },
  filterViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 2,
    backgroundColor: 'white'
  },
  filterViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  clearLeft: {
    flex: 5,
    alignItems: 'flex-start'
  },
  clearRight: {
    flex: 5,
    alignItems: 'flex-end',
    marginRight: 30
  },
  clearCellCaption: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.darkSlateGray,
  },
  applySavedCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  datesFromToView: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'white'
  },
  datesFromView: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    alignItems: 'center',
  },
  datesFromTopView: {
    flex: 5,
    justifyContent: 'center'

  },
  hoursView: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  datesFromBottomView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'

  },
  fromLabel: {
    color: colors.darkSlateGray
  },
  fromValue: {
    color: colors.darkOrange,
    fontSize: 20
  },
  hoursValue: {
    flex: 5,
    marginLeft: 10,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  multiSlider: {
    flex: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hoursMinValue: {
    flex: 6,
    alignItems: 'flex-start'
  },
  hoursMaxValue: {
    flex: 5,
    alignItems: 'flex-end'
  },
  hoursCloseValue: {
    flex: 1,
    alignItems: 'flex-end'
  },
  priceMinValue: {
    flex: 5,
    alignItems: 'flex-start'
  },
  priceMaxValue: {
    flex: 5,
    alignItems: 'flex-end'
  },
  datesToView: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    justifyContent: 'center',
    alignItems: 'center'
  },
  datePicker: {
    height: 250,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    borderColor: colors.grey87,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  applyCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkOrange,
  },
  filterCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  discloser: {
    height: 20,
    width: 20
  },
  applyButton: {
    margin: 5,
    height: 35,
    width: 110,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: colors.lightSeaGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonCaption: {
    color: 'white'
  },
  resetButton: {
    margin: 5
  },
  placeContextView: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    padding: 10,
    backgroundColor: 'white'
  },
  placeContextClose: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  locationContext: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 20,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: colors.darkSlateGray
  },
  aroundContext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftContext: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: colors.darkIvory,
    shadowOffset: {
      width: 13,
      height: 13
    },
    shadowRadius: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContext: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: colors.darkIvory,
    shadowOffset: {
      width: 13,
      height: 13
    },
    shadowRadius: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  aroundBtn: {
    width: 40,
    height: 40,
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 5,
    borderTopColor: colors.silver,
    borderLeftColor: colors.lightIvory,
    borderRightColor: colors.lightIvory,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundLabel: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundLabelText: {
    fontSize: 16,
    color: colors.darkSlateGray
  },
  aroundValueText: {
    fontSize: 24,
    color: colors.darkOrange
  },
  aroundValue: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundUnit: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusMinusBtn: {
    color: colors.lightSeaGreen
  }
});
