#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
#include <cmath>
using namespace std;

int calculateWire(const vector<int>& perm, int N) {
    vector<int> pos(N + 1); // pos[i] = position of sentinel i
    for (int i = 1; i <= N; ++i) {
        pos[i] = i;
    }

    vector<int> activated;
    int total = 0;

    for (int i = 0; i < N; ++i) {
        int curr = perm[i];
        int currPos = pos[curr];

        if (i == 0) {
            // First sentinel connects to Alpha (position 0)
            total += abs(currPos - 0);
        } else if (i == N - 1) {
            // Last sentinel connects to Omega (position N+1)
            total += abs(currPos - (N + 1));
        }

        // Connect to nearest already activated sentinel
        if (!activated.empty()) {
            int minDist = INT_MAX;
            for (int prev : activated) {
                minDist = min(minDist, abs(currPos - pos[prev]));
            }
            total += minDist;
        }

        activated.push_back(curr);
    }

    return total;
}

int main() {
    int N, M;
    cin >> N >> M;

    vector<int> perm(N);
    for (int i = 0; i < N; ++i) perm[i] = i + 1;

    int minWire = INT_MAX;

    do {
        int used = calculateWire(perm, N);
        minWire = min(minWire, used);
    } while (next_permutation(perm.begin(), perm.end()));

    if (minWire > M)
        cout << -1 << endl;
    else
        cout << M - minWire << endl;

    return 0;
}
