# # 筆記方向

1. 查演算法的各種使用時機
2. 附圖解
3. pseudo code
4. 簡單文字描述
5. Big O
6. 找機會轉成 Markdown
7. （Ｑ？） still need to find the anwer

# # 重看過往

1. 整理多層 object --> 淮: 用 BFS
2. old case study: idsToChildren
3. 找時間把 O, Ω, Θ 算法再認真看一遍

# # 待整理

- [AVL Tree](https://josephjsf2.github.io/data/structure/and/algorithm/2019/06/22/avl-tree.html)

  - 每次更新需要：更新高度、做平衡
  - 每個 node 需要紀錄高度，以 `BF (balance factor)` 來判斷是否平衡

    - `height = max( heightL, heightR) + 1`
    - `BF = heightL - heightR`
    - `-1 <= BF(T) <= 1`：表示平衡

  - 平衡只有四種不同狀況：RR, RL, LL, LR

- [紅黑樹 (Red-Black Tree, RBT)](https://josephjsf2.github.io/data/structure/and/algorithm/2020/04/28/red-black-tree-part-1.html)

  - 達到需要再次做平衡的規則比 AVL Tree 還要寬鬆的平衡二元樹

  - 規則：

    - root、null 一定是黑色
    - 紅色的 children 一定是黑色
    - 每條路徑擁有相同數量的黑色

# # 待研究
