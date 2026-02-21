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

interface StockItem {
  name: string;
  status: string;
}

const LOW_STOCK_ITEMS: StockItem[] = [
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
];

const OTHER_ITEMS: StockItem[] = [
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
  { name: 'Item Name', status: 'Remaining stock' },
];

export default function InventoryStatusScreen(): React.ReactElement {
  const [selectedBranch, setSelectedBranch] = useState<'branch1' | 'branch2'>('branch1');

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
        <Text style={styles.pageTitle}>Inventory Status</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Inventory status such as item stocks can be{'\n'}monitored here:
        </Text>

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

        {/* Low Stock Items section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconCircleRed}>
              <Ionicons name="alert-circle" size={16} color="#fff" />
            </View>
            <Text style={styles.sectionTitle}>Low Stock Items</Text>
          </View>

          {LOW_STOCK_ITEMS.map((item, i) => (
            <View key={i} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemStatus}>{item.status}</Text>
            </View>
          ))}

          <Text style={styles.infoText}>
            These are the items that are running low on supply. Inform employees to restock and update stock!
          </Text>

          <TouchableOpacity style={styles.linkRow}>
            <Text style={styles.linkText}>Broadcast to Messages </Text>
            <Ionicons name="arrow-forward" size={14} color={Colors.primaryGreen} />
          </TouchableOpacity>
        </View>

        {/* Other Items section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconCircleGreen}>
              <Ionicons name="checkmark-circle" size={16} color="#fff" />
            </View>
            <Text style={styles.sectionTitle}>Other Inventory Items</Text>
          </View>

          {OTHER_ITEMS.map((item, i) => (
            <View key={i} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemStatus}>{item.status}</Text>
            </View>
          ))}
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  branchSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
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
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  iconCircleRed: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleGreen: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemName: {
    fontSize: 13,
    color: '#333',
  },
  itemStatus: {
    fontSize: 13,
    color: '#888',
  },
  infoText: {
    fontSize: 11,
    color: '#666',
    marginTop: 10,
    lineHeight: 16,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  linkText: {
    fontSize: 13,
    color: Colors.primaryGreen,
    fontWeight: '500',
  },
});