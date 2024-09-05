export const getLabels = (interval: string) => {
    if (interval === '1day') return ['9:30', '12:00', '14:30', '17:00']
    if (interval === '1week') return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    if(interval === '1year') return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
    return ['Week 1', 'Week 2', 'Week 3', 'Week 4']
}
