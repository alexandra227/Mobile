import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import FoodParadiseLogo from '@/components/FoodParadiselogo';
import BarChart from '@/components/Dashboard/BarChart';

const CHART_DATA = [
  { day: 'M', value: 45 },
  { day: 'T', value: 65 },
  { day: 'W', value: 80 },
  { day: 'T', value: 85 },
  { day: 'F', value: 70 },
  { day: 'S', value: 95 },
  { day: 'S', value: 75 },
];

export default function ReportsScreen(): React.ReactElement {
  const [selectedBranch, setSelectedBranch] = useState<'branch1' | 'branch2'>('branch1');
  const [selectedFormat, setSelectedFormat] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryGreen} />

      {/* ── Header ─────────────────────────────────────────────── */}
      <View style={styles.header}>
        <View style={styles.logoWrap}>
          <FoodParadiseLogo size="xsmall" showSubtitle={false} align="left" />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="settings-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="grid-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.pageTitle}>Reports</Text>

        {/* Branch selector */}
        <View style={styles.branchSelector}>
          <TouchableOpacity
            style={[styles.branchTab, selectedBranch === 'branch1' && styles.branchTabActive]}
            onPress={() => setSelectedBranch('branch1')}
          >
            <Text style={[styles.branchTabText, selectedBranch === 'branch1' && styles.branchTabTextActive]}>
              Branch 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.branchTab, selectedBranch === 'branch2' && styles.branchTabActive]}
            onPress={() => setSelectedBranch('branch2')}
          >
            <Text style={[styles.branchTabText, selectedBranch === 'branch2' && styles.branchTabTextActive]}>
              Branch 2
            </Text>
          </TouchableOpacity>
        </View>

        {/* Heading */}
        <Text style={styles.sectionHeading}>
          Viewing: {selectedBranch === 'branch1' ? 'Branch 1' : 'Branch 2'} {selectedFormat.charAt(0).toUpperCase() + selectedFormat.slice(1)} performance
        </Text>

        {/* Date picker row */}
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <View style={styles.datePickerBox}>
            <Text style={styles.dateText}>Today</Text>
            <Ionicons name="calendar" size={16} color={Colors.primaryGreen} />
          </View>
        </View>

        {/* Format selector */}
        <View style={[styles.row, { marginTop: 12 }]}>
          <Text style={styles.label}>Format:</Text>
          <View style={styles.formatButtons}>
            <TouchableOpacity
              style={[styles.formatBtn, selectedFormat === 'daily' && styles.formatBtnActive]}
              onPress={() => setSelectedFormat('daily')}
            >
              <Text style={[styles.formatBtnText, selectedFormat === 'daily' && styles.formatBtnTextActive]}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.formatBtn, selectedFormat === 'weekly' && styles.formatBtnActive]}
              onPress={() => setSelectedFormat('weekly')}
            >
              <Text style={[styles.formatBtnText, selectedFormat === 'weekly' && styles.formatBtnTextActive]}>
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.formatBtn, selectedFormat === 'monthly' && styles.formatBtnActive]}
              onPress={() => setSelectedFormat('monthly')}
            >
              <Text style={[styles.formatBtnText, selectedFormat === 'monthly' && styles.formatBtnTextActive]}>
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chart */}
        <View style={styles.chartWrapper}>
          <BarChart data={CHART_DATA} />
        </View>

        {/* Performance Detail Summary */}
        <Text style={styles.summaryTitle}>Performance Detail Summary</Text>
        <Text style={styles.summarySubtitle}>Details of the branch performance summary:</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Overall Sales:</Text>
            <Text style={styles.tableValue}>₱ 4,932.22</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Total Orders:</Text>
            <Text style={styles.tableValue}>75 Orders</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Due In-orders:</Text>
            <Text style={styles.tableValue}>37</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Rejected orders:</Text>
            <Text style={styles.tableValue}>25</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Refunded:</Text>
            <Text style={styles.tableValue}>13</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Voided Items:</Text>
            <Text style={styles.tableValue}>5</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: Colors.primaryGreenDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 1,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 2,
    minHeight: 72,
  },
  logoWrap: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexShrink: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  branchSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  branchTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
  },
  branchTabActive: {
    backgroundColor: Colors.primaryGreen,
  },
  branchTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
  },
  branchTabTextActive: {
    color: '#fff',
  },
  sectionHeading: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    width: 50,
  },
  datePickerBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.primaryGreen,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  dateText: {
    fontSize: 13,
    color: '#333',
  },
  formatButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  formatBtn: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  formatBtnActive: {
    backgroundColor: '#f0f0f0',
    borderColor: '#999',
  },
  formatBtnText: {
    fontSize: 12,
    color: '#666',
  },
  formatBtnTextActive: {
    color: '#111',
    fontWeight: '600',
  },
  chartWrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  summarySubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tableLabel: {
    fontSize: 13,
    color: '#555',
  },
  tableValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
  },
});